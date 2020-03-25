import {
  Component,
  Element,
  Prop,
  Host,
  Listen,
  Watch,
  h
} from "@stencil/core";

@Component({
  tag: "alx-menu-item",
  styleUrl: "alx-menu-item.scss",
  shadow: true
})

export class AlxMenuItem {
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
  // selectionMode: MenuSelectionMode = MenuSelectionMode.Single;

  @Prop({ mutable: true, reflect: false }) url: string = "";
  @Prop({ mutable: true, reflect: false }) ariaExpanded: boolean = false;
  @Prop({ mutable: true, reflect: true }) depth: number = 0;
  @Prop({ mutable: true, reflect: false }) hasChildren: boolean = null;
  @Prop({ mutable: true, reflect: true }) parentExpanded: boolean = false;

  @Watch("ariaExpanded")
  expandedHandler(newValue: boolean) {
      const children = Array.prototype.slice.call(this.el.querySelector("alx-menu").children);
      children.forEach(child => (child.parentExpanded = newValue));
  }


  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------

  componentWillRender() {
    this.hasChildren = !!this.el.querySelector("alx-menu");
    let parentMenu = this.el.closest("alx-menu");

    let nextParentMenu;
    this.depth = 0;

    while (parentMenu) {
      nextParentMenu = parentMenu.parentElement.closest("alx-menu");
      if (nextParentMenu === parentMenu) {
        break;
      } else {
        parentMenu = nextParentMenu;
        this.depth = this.depth + 1;
      }
    }

  }

  render() {

    const icon = this.hasChildren ? (
      <svg class="caret" xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="16" width="16" viewBox="0 0 16 16"><path d="M6.293 12l4-4-4-4h1.414l4 4-4 4z"></path></svg>
    ) : null;


    return (
      <Host role="none" >
        <a href={this.url} tabindex={this.parentExpanded || this.depth === 1 ? "0" : "-1"} role="menuitem" aria-haspopup={this.hasChildren.toString()} aria-expanded={this.hasChildren ? this.ariaExpanded.toString() : this.ariaExpanded}
        onClick={this.onClick.bind(this)}>
          <slot></slot>
          {icon}
        </a>
        
        <div class="alx-menu-children"><slot name="children"></slot></div>
      </Host>
    );
  }

  //--------------------------------------------------------------------------
  //
  //  Event Listeners
  //
  //--------------------------------------------------------------------------

  @Listen("onClick") onClick(e) {
    if (this.hasChildren) {
      e.preventDefault();
      this.ariaExpanded = !this.ariaExpanded;
    }
  }

  @Listen("onClickChevron") onClickChevron(e) {
    e.stopPropagation();
    e.preventDefault();
      this.ariaExpanded = !this.ariaExpanded;
  }


  //--------------------------------------------------------------------------
  //
  //  Events
  //
  //--------------------------------------------------------------------------


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
