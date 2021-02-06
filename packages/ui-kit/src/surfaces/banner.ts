import {
  BlockContext,
  ElementType,
  IActionsBlock,
  IButtonElement,
  IContextBlock,
  IDatePickerElement,
  IDividerBlock,
  IElement,
  IImageBlock,
  IInputBlock,
  IMultiStaticSelectElement,
  IOverflowElement,
  ISectionBlock,
  IStaticSelectElement,
  ILinearScaleElement,
  IPlainText,
  IMarkdown,
  TextObject,
} from '../definition/blocks';
import { ElementRenderer } from '../definition/rendering/ElementRenderer';
import { IParser } from '../definition/rendering/IParser';
import { createElementRenderer, createSurfaceRenderer } from '../functions';

export abstract class UiKitParserBanner implements IParser<unknown> {
  plainText: ElementRenderer<unknown, IPlainText>;

  mrkdwn: ElementRenderer<unknown, IMarkdown>;

  text = (text: TextObject, context: BlockContext, index: number): unknown => {
    if (text.type === ElementType.PLAIN_TEXT) {
      return this.plainText(text as IPlainText, context, index);
    }

    if (text.type === ElementType.MARKDOWN) {
      return this.mrkdwn(text as IMarkdown, context, index);
    }

    return null;
  };

  divider: ElementRenderer<unknown, IDividerBlock>;

  section: ElementRenderer<unknown, ISectionBlock>;

  image: ElementRenderer<unknown, IImageBlock>;

  actions: ElementRenderer<unknown, IActionsBlock>;

  context: ElementRenderer<unknown, IContextBlock>;

  button: (
    element: IButtonElement,
    context: BlockContext,
    index: number
  ) => unknown;

  datePicker: (
    element: IDatePickerElement,
    context: BlockContext,
    index: number
  ) => unknown;

  staticSelect: (
    element: IStaticSelectElement,
    context: BlockContext,
    index: number
  ) => unknown;

  multiStaticSelect: (
    element: IMultiStaticSelectElement,
    context: BlockContext,
    index: number
  ) => unknown;

  overflow: (
    element: IOverflowElement,
    context: BlockContext,
    index: number
  ) => unknown;

  input: ElementRenderer<unknown, IInputBlock>;

  plainInput: ElementRenderer<unknown, IElement>;

  linearScale: ElementRenderer<unknown, ILinearScaleElement>;

  renderAccessories = createElementRenderer(this, [
    ElementType.BUTTON,
    ElementType.IMAGE,
    ElementType.MULTI_STATIC_SELECT,
    ElementType.STATIC_SELECT,
    ElementType.CONVERSATION_SELECT,
    ElementType.USER_SELECT,
    ElementType.CHANNEL_SELECT,
    ElementType.USER_SELECT,
    ElementType.DATEPICKER,
    ElementType.OVERFLOW,
  ]);

  renderActions = createElementRenderer(this, [
    ElementType.BUTTON,
    ElementType.STATIC_SELECT,
    ElementType.MULTI_STATIC_SELECT,
    ElementType.CONVERSATION_SELECT,
    ElementType.CHANNEL_SELECT,
    ElementType.USER_SELECT,
    ElementType.USER_SELECT,
    ElementType.DATEPICKER,
    ElementType.LINEAR_SCALE,
  ]);

  renderContext = createElementRenderer(this, [
    ElementType.IMAGE,
    ElementType.PLAIN_TEXT,
    ElementType.MARKDOWN,
  ]);

  renderInputs = createElementRenderer(this, [
    ElementType.STATIC_SELECT,
    ElementType.PLAIN_TEXT_INPUT,
    ElementType.MULTI_STATIC_SELECT,
    ElementType.CONVERSATION_SELECT,
    ElementType.CHANNEL_SELECT,
    ElementType.USER_SELECT,
    ElementType.USER_SELECT,
    ElementType.DATEPICKER,
    ElementType.LINEAR_SCALE,
  ]);
}

export const uiKitBanner = createSurfaceRenderer<unknown>([
  ElementType.DIVIDER,
  ElementType.SECTION,
  ElementType.IMAGE,
  ElementType.ACTIONS,
  ElementType.CONTEXT,
  ElementType.INPUT,
]);
