import { ConcreteMemento } from './concrete-memento';
import { Memento } from './memento';

// Originator
export class ImageEditor {
  constructor(private filePath: string, private fileFormart: string) {}

  convertFormatTo(format: string): void {
    this.fileFormart = format;
    this.filePath = this.filePath.split('.').slice(0, -1).join('');
    this.filePath = '.' + format;
  }

  save(): Readonly<Memento> {
    const date = new Date();

    return new ConcreteMemento(
      date.toISOString(),
      date,
      this.filePath,
      this.fileFormart,
    );
  }

  restore(memento: Memento): void {
    const concreteMemento = memento as ConcreteMemento;

    this.filePath = concreteMemento.getFilePath();
    this.fileFormart = concreteMemento.getFileFormat();
  }
}

const img = new ImageEditor('/media/image.png', 'png');
img.convertFormatTo('jpg');
console.log(img);
