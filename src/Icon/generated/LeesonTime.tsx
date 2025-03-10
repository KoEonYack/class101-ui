import React from "react";
import { IconProps } from '../index';
export default class SvgLeesonTime extends React.PureComponent<IconProps> {
  public static defaultProps: Partial<IconProps> = {
    fillColor: '#3E4042',
    accentColor: '#DDE0E2',
    size: 24
  };

  public render() {
    return <svg width={this.props.size} height={this.props.size} style={this.props.style} className={this.props.className} viewBox="0 0 24 24"><path fill={this.props.fillColor} fillRule="evenodd" d="M17 4h2.005C20.107 4 21 4.89 21 6v13c0 1.105-.893 2-1.995 2H4.995A1.994 1.994 0 013 19V6c0-1.105.893-2 1.995-2H7V2h3v2h4V2h3v2zm2 15V8H5v11h14zm-6-6h4.09v4.09H13V13z" /></svg>;
  }

}