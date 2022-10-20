interface IndicatorProps {
    indicatorQuantity: number;
    activeIndex: number;
    onChangeIndicator: (index: number) => void;
}
declare function Indicator(props: IndicatorProps): JSX.Element;
export default Indicator;
