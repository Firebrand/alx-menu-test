import {
  Component,
  Element,
  Prop,
  Host,
  Event,
  EventEmitter,
  Listen,
  h
} from "@stencil/core";

@Component({
  tag: "alx-menu",
  styleUrl: "alx-menu.scss",
  shadow: true
})
export class AlxMenu {
  //--------------------------------------------------------------------------
  //
  //  Element
  //
  //--------------------------------------------------------------------------

  @Element() el: HTMLElement;

  //--------------------------------------------------------------------------
  //
  //  Properties
  //
  //--------------------------------------------------------------------------

  /**
   * Be sure to add a jsdoc comment describing your propery for the generated readme file.
   * If your property should be hidden from documentation, you can use the `@internal` tag
   */
  // @Prop({ mutable: true, reflect: true }) lines: boolean = false;
  // @Prop({ mutable: true, reflect: true }) root: boolean = true;
  // @Prop({ mutable: true, reflect: true }) theme: "light" | "dark";
  // @Prop({ mutable: true, reflect: true }) size: "s" | "m" = "m";
  // @Prop({ mutable: true, reflect: true })
  // selectionMode: TreeSelectionMode = TreeSelectionMode.Single;

  @Prop({ mutable: true, reflect: true }) role: string = "menu";

  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------


  componentWillRender() {
  }

  render() {

    return (
      <Host
        role={this.role}
      >
        <slot></slot>
      </Host>
    );
  }

  //--------------------------------------------------------------------------
  //
  //  Event Listeners
  //
  //--------------------------------------------------------------------------

  @Listen("focus") onFocus() {
  }

  //--------------------------------------------------------------------------
  //
  //  Events
  //
  //--------------------------------------------------------------------------

  @Event() calciteTreeSelect: EventEmitter;

  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------

  //--------------------------------------------------------------------------
  //
  //  Private State/Props
  //
  //--------------------------------------------------------------------------

  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------
}
