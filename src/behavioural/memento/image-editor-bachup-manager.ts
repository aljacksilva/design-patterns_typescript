import { ImageEditor } from './image-editor';
import { Memento } from './memento';

export class ImageEditorBackupManager {
  private mementos: Memento[] = [];

  constructor(private readonly imageEditor: ImageEditor) {}

  backup(): void {
    console.log(`Backup: save the state of ImageEditor`);

    this.mementos.push(this.imageEditor.save());
  }

  undo(): void {
    const memento = this.mementos.pop();

    if (!memento) {
      console.log(`Backup: no mementos`);
      return;
    }

    this.imageEditor.restore(memento);

    console.log(`Backup: ${memento.getName()} has restored successfully.`);
  }

  showMementos(): void {
    for (const memento of this.mementos) {
      console.log(memento);
    }
  }
}
