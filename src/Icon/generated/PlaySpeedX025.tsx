import React from "react";
import { IconProps } from '../index';
export default class SvgPlaySpeedX025 extends React.PureComponent<IconProps> {
  public static defaultProps: Partial<IconProps> = {
    fillColor: '#3E4042',
    size: 24
  };

  public render() {
    return <svg width={this.props.size} height={this.props.size} viewBox="0 0 24 24"><path fill={this.props.fillColor} fillRule="evenodd" d="M2.514 11.486a9.904 9.904 0 0 1-.014-.404V9.213c0-1.363.247-2.406.74-3.13C3.736 5.362 4.445 5 5.369 5 6.292 5 7 5.358 7.495 6.074c.494.716.745 1.737.754 3.065v.612L6.5 11.5l-.18-.18V8.934c0-.78-.078-1.364-.232-1.754-.154-.39-.394-.584-.72-.584-.612 0-.929.714-.952 2.14v.847l-1.902 1.902zm8.13 2.87a.93.93 0 0 1-.285.46c-.1.09-.212.16-.335.208L10 15l.644-.644zm.337-.337L12 13l-.275-.275 1.934-2.458c.34-.471.59-.885.75-1.24a2.48 2.48 0 0 0 .242-1.023c0-.44-.076-.784-.228-1.033a.725.725 0 0 0-.656-.374c-.312 0-.56.145-.744.435-.183.29-.275.698-.275 1.223h-1.93c0-.607.126-1.162.377-1.665a2.817 2.817 0 0 1 1.06-1.172c.456-.279.971-.418 1.546-.418.884 0 1.57.244 2.056.73.487.488.73 1.18.73 2.077 0 .557-.134 1.122-.404 1.695s-.757 1.279-1.464 2.117l-1.271 1.815h3.364v1.597h-5.83v-1.012zm5.933-3.854l.49-5.03h4.79V6.78H18.98l-.177 2.12c.372-.248.754-.373 1.149-.373.815 0 1.444.29 1.885.87.442.58.663 1.4.663 2.46 0 .992-.263 1.792-.788 2.399-.526.607-1.228.91-2.107.91a2.93 2.93 0 0 1-1.448-.37 2.729 2.729 0 0 1-1.05-1.03 2.965 2.965 0 0 1-.39-1.495h1.903c.031.413.133.732.305.959a.8.8 0 0 0 .666.34c.318 0 .562-.153.734-.46.173-.305.259-.761.259-1.369 0-.57-.103-1-.31-1.29-.206-.29-.495-.436-.866-.436-.363 0-.643.125-.843.374l-.122.17-1.53-.394zM9.5 13l-2 2 2 2-1 1-2-2-2 2-1-1 2-2-2-2 1-1 2 2 2-2 1 1z" /></svg>;
  }

}