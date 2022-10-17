import cx from "@src/utils/cx";
import { FC } from "react";

type Props = {
  fromColor: string,
  toColor: string,
  className?: string,
}

export const LineWithDot: FC<Props> = (props) => {
  const { fromColor, toColor, className } = props;
  return (
    <div className={cx('flex items-center', className)}>
      <div className="w-2 h-2 rounded" style={{ background: fromColor }} />
      <div className="h-1 flex-1 opacity-50" style={{ background: `linear-gradient(90.01deg, ${fromColor} 0%, ${toColor} 100%)` }} />
    </div>
  )
};