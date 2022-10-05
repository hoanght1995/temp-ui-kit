interface IndicatorProps {
    indicatorQuantity: number;
    activeIndex: number;
    onChangeIndicator: (index: number) => void;
}
declare function Indicator({ indicatorQuantity, activeIndex, onChangeIndicator }: IndicatorProps): JSX.Element;
export default Indicator;
