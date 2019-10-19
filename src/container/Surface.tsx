/**
 * @fileOverview Surface
 */
import React, { ReactNode, CSSProperties } from 'react';
import classNames from 'classnames';
import { PresentationAttributes } from '../util/types';

interface SurfaceProps {
  width: number;
  height: number;
  viewBox?: {
    x?: number;
    y?: number;
    width?: number;
    height?: number;
  };
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
}

type Props = PresentationAttributes<SVGSVGElement> & SurfaceProps;

function Surface(props: Props) {
  const { children, width, height, viewBox, className, style, ...others } = props;
  const svgView = viewBox || { width, height, x: 0, y: 0 };
  const layerClass = classNames('recharts-surface', className);

  return (
    <svg
      {...others}
      className={layerClass}
      width={width}
      height={height}
      style={style}
      viewBox={`${svgView.x} ${svgView.y} ${svgView.width} ${svgView.height}`}
      version="1.1"
    >
      {children}
    </svg>
  );
}

export default Surface;