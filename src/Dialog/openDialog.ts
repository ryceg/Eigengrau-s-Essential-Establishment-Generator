import { DialogOptions } from 'twine-sugarcube'

interface DialogArguments {
  header: string
  passage: string
  classNames?: string
  rerender?: true
  dialogOpts?: DialogOptions
  func?(): unknown
}

export const openDialog = (args: DialogArguments) => {
  if (args.func) args.func()
  Dialog.setup(args.header, args.classNames)
  Dialog.wiki(Story.get(args.passage).processText())
  if (args.rerender) {
    Dialog.open(args.dialogOpts, () => setup.rerenderPage(passage()))
  } else {
    Dialog.open(args.dialogOpts)
  }
}

export const rerenderPage = (passageName: string) => {
  Engine.play(passageName, true)
}
