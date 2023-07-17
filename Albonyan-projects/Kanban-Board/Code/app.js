//Main Container in page
class Kanban {
  constructor(root) {
    this.root = root;
    Kanban.columns().forEach((column) => {
      const columnView = new Column(column.id, column.title);
      this.root.appendChild(columnView.elements.root);
    });
  }

  static columns() {
    return [
      {
        id: 1,
        title: "Not Started",
      },
      {
        id: 2,
        title: "In Progress",
      },
      {
        id: 3,
        title: "Completed",
      },
    ];
  }
}
//Three divs for tasks
class Column {
  constructor(id, title) {
    const toDropZone = DropZone.createDropZone();

    this.elements = {};
    this.elements.root = Column.createRoot();
    this.elements.title = this.elements.root.querySelector(
      ".kanban__column-title"
    );
    this.elements.items = this.elements.root.querySelector(
      ".kanban__column-items"
    );
    this.elements.addItem =
      this.elements.root.querySelector(".kanban__add-item");
    this.elements.root.dataset.id = id;
    this.elements.title.textContent = title;
    this.elements.items.appendChild(toDropZone);
    // this Add Item in Root Div
    this.elements.addItem.addEventListener("click", () => {
      const newItem = KanbanAPI.insertItem(id, "");
      this.renderItem(newItem);
    });
    KanbanAPI.getItems(id).forEach((item) => {
      this.renderItem(item);
    });
  }
  static createRoot() {
    const range = document.createRange();

    range.selectNode(document.body);

    return range.createContextualFragment(`
			<div class="kanban__column">
				<div class="kanban__column-title"></div>
				<div class="kanban__column-items"></div>
				<button class="kanban__add-item" type="button">+ Add</button>
			</div>
		`).children[0];
  }
  renderItem(data) {
    //creat item struct
    const item = new Item(data.id, data.content);
    this.elements.items.appendChild(item.elements.root);
  }
}
//Render item in any column
class Item {
  constructor(id, content) {
    const bottomDropZone = DropZone.createDropZone();

    this.elements = {};
    this.elements.root = Item.createRoot();
    this.elements.input = this.elements.root.querySelector(
      ".kanban__item-input"
    );
    this.elements.edit = this.elements.root.querySelector(".edit");
    this.elements.remove = this.elements.root.querySelector(".remove");

    this.elements.root.dataset.id = id;
    this.elements.input.value = content;
    this.content = content;
    this.elements.root.appendChild(bottomDropZone);
    const onBlur = () => {
      this.elements.input.disabled = true;
      const newContent = this.elements.input.value.trim();
      if (newContent == this.content) {
        return;
      }
      this.content = newContent;
      KanbanAPI.updateItem(id, {
        content: this.content,
      });
    };
    this.elements.edit.addEventListener("click", () => {
      this.elements.input.disabled = false;
      this.elements.input.focus();
    });

    this.elements.input.addEventListener("blur", onBlur);
    this.elements.remove.addEventListener("click", () => {
      KanbanAPI.deleteItem(id);
      this.elements.input.removeEventListener("blur", onBlur);
      this.elements.root.parentElement.removeChild(this.elements.root);
    });

    //drag Items
    this.elements.root.addEventListener("dragstart", (e) => {
      e.dataTransfer.setData("text/plain", id);
    });

    this.elements.input.addEventListener("drop", (e) => {
      e.preventDefault();
    });
  }
  static createRoot() {
    const range = document.createRange();

    range.selectNode(document.body);

    return range.createContextualFragment(`
    <div>
			<div class="kanban__item" draggable="true">
				<input type="text" class="kanban__item-input" placeholder="New Task" value required ></input>
        <div class="icons">
        <ion-icon class="edit" name="create-outline"></ion-icon>
        <ion-icon class="remove" name="trash-outline"></ion-icon>
        </div>
			</div>
      </div>
		`).children[0];
  }
}
//save and get data in and from local storage and insertItems and delete
class KanbanAPI {
  static getItems(columnId) {
    const column = read().find((column) => column.id == columnId);

    if (!column) {
      return [];
    }

    return column.items;
  }

  static insertItem(columnId, content) {
    const data = read();
    const column = data.find((column) => column.id == columnId);
    const item = {
      id: Date.now(),
      content,
    };

    if (!column) {
      throw new Error("Column does not exist.");
    }

    column.items.push(item);
    save(data);

    return item;
  }

  static updateItem(itemId, newProps) {
    const data = read();
    const [item, currentColumn] = (() => {
      for (const column of data) {
        const item = column.items.find((item) => item.id == itemId);

        if (item) {
          return [item, column];
        }
      }
    })();

    if (!item) {
      throw new Error("Item not found.");
    }

    item.content =
      newProps.content === undefined ? item.content : newProps.content;

    // Update column and position
    if (newProps.columnId !== undefined && newProps.position !== undefined) {
      const targetColumn = data.find(
        (column) => column.id == newProps.columnId
      );

      if (!targetColumn) {
        throw new Error("Target column not found.");
      }

      // Delete the item from it's current column
      currentColumn.items.splice(currentColumn.items.indexOf(item), 1);

      // Move item into it's new column and position
      targetColumn.items.splice(newProps.position, 0, item);
    }

    save(data);
  }

  static deleteItem(itemId) {
    const data = read();

    for (const column of data) {
      const item = column.items.find((item) => item.id == itemId);

      if (item) {
        column.items.splice(column.items.indexOf(item), 1);
      }
    }

    save(data);
  }
}
//get data from local storage
function read() {
  const json = localStorage.getItem("kanban-data");

  if (!json) {
    return [
      {
        id: 1,
        items: [],
      },
      {
        id: 2,
        items: [],
      },
      {
        id: 3,
        items: [],
      },
    ];
  }

  return JSON.parse(json);
}

//set data in local  storage
function save(data) {
  localStorage.setItem("kanban-data", JSON.stringify(data));
}

//drag items in any column of tasks
class DropZone {
  static createDropZone() {
    const range = document.createRange();

    range.selectNode(document.body);

    const dropZone = range.createContextualFragment(`
			<div class="kanban__dropzone"></div>
		`).children[0];

    dropZone.addEventListener("dragover", (e) => {
      e.preventDefault();
      dropZone.classList.add("kanban__dropzone--active");
    });

    dropZone.addEventListener("dragleave", () => {
      dropZone.classList.remove("kanban__dropzone--active");
    });

    dropZone.addEventListener("drop", (e) => {
      e.preventDefault();
      dropZone.classList.remove("kanban__dropzone--active");

      const columnElement = dropZone.closest(".kanban__column");
      const columnId = Number(columnElement.dataset.id);
      const dropZonesInColumn = Array.from(
        columnElement.querySelectorAll(".kanban__dropzone")
      );
      const droppedIndex = dropZonesInColumn.indexOf(dropZone);
      const itemId = Number(e.dataTransfer.getData("text/plain"));
      const droppedItemElement = document.querySelector(
        `[data-id="${itemId}"]`
      );
      const insertAfter = dropZone.parentElement.classList.contains(
        "kanban__item"
      )
        ? dropZone.parentElement
        : dropZone;

      if (droppedItemElement.contains(dropZone)) {
        return;
      }

      insertAfter.after(droppedItemElement);
      KanbanAPI.updateItem(itemId, {
        columnId,
        position: droppedIndex,
      });
    });

    return dropZone;
  }
}
//render main div in page
new Kanban(document.querySelector(".kanban"));
