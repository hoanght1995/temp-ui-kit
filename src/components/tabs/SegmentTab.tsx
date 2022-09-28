import { useSpring, animated } from "@react-spring/native";
import Col from "components/basic/Col";
import Row from "components/basic/Row";
import RText from "components/basic/RText";
import { COLORS } from "constants";
import React, {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useState,
} from "react";
import {
  LayoutChangeEvent,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from "react-native";

interface TabItemType {
  name?: string;
}

export interface SegmentTabProps {
  tabs: Array<TabItemType>;
  style?: StyleProp<ViewStyle>;
  size?: "sm" | "md" | "lg";
  initTabIndex?: number;
  currentTab: number;
  onChangeTab?: (tabIndex: number) => void;
}

export interface SegmentRef {
  changeTab: (tabIndex: number) => void
}

const CONFIGS = {
  // [labelType, itemPaddingHorizontal, itemPaddingVertical]
  sm: ["l4", 8, 4],
  md: ["l3", 8, 4],
  lg: ["l3", 12, 8],
};

/**
 * Calculate the sum of the given number of array
 * @param arr array number
 * @param num quantity to be calculated
 * @returns sum of the given number of array
 */
const addingUpto = (arr: number[], num: number): number => {
  let sum = arr[num];

  if (num === 0) return sum;

  return (sum += addingUpto(arr, num - 1));
};

/**
 * Calculate the with of tab
 * @param tabWidths list with of each tab
 * @param selectedTab tab which selected
 * @returns with of tab in percentage
 */
const calculateWidth = (tabWidths: number[], selectedTab: number): string => {
  const totalWidth = tabWidths.reduce((a, b) => a + b, 0);

  const width = (tabWidths[selectedTab] / totalWidth) * 100;

  return `${isNaN(width) ? 0 : width}%`;
};

/**
 * Calculate the left distance of tab
 * @param tabWidths list with of each tab
 * @param selectedTab tab which selected
 * @returns the left distance of tab from the left in percentage
 */
const calculateLeftDistance = (tabWidths: number[], selectedTab: number) => {
  if (selectedTab === 0) return "0%";

  const leftDistance = addingUpto(tabWidths, selectedTab - 1);

  const totalWidth = tabWidths.reduce((a, b) => a + b, 0);

  const leftDistanceByPercent = (leftDistance / totalWidth) * 100;

  return `${isNaN(leftDistanceByPercent) ? 0 : leftDistanceByPercent}%`;
};


const SegmentTab = forwardRef<SegmentRef, SegmentTabProps>((props, ref) => {
  const {
    tabs,
    style,
    size,
    initTabIndex,
    currentTab,
    onChangeTab,
    ...restProps
  } = props;
  const [selectedTab, setSelectedTab] = useState(
    currentTab ?? initTabIndex ?? 0
  );

  const configsBySize: any = CONFIGS[size || "md"];

  const [tabWidths, setTabWidths] = useState<number[]>([]);

  const renderTabItem = (tab: TabItemType, i: number) => {
    const _tabItemStyle = [
      styles.tabItem,
      {
        paddingHorizontal: configsBySize[1],
        paddingVertical: configsBySize[2],
      },
    ];

    const updateTabWidth = useCallback(
      (event: LayoutChangeEvent) => {
        const { width } = event.nativeEvent.layout;
        setTabWidths((tabWidths) => {
          tabWidths[i] = width;
          return [...tabWidths];
        });
      },
      [i]
    );

    return (
      <Col
        onPress={() => setSelectedTab(i)}
        key={`${tab.name}${i}`}
        style={_tabItemStyle}
        onLayout={updateTabWidth}
      >
        <RText type={configsBySize[0]} title={tab.name} />
      </Col>
    );
  };

  const springProps = useSpring<any>({
    opacity: 1,
    width: calculateWidth(tabWidths, selectedTab),
    left: calculateLeftDistance(tabWidths, selectedTab),
    position: "absolute",
    top: 0,
    height: "100%",
    zIndex: -1,
    padding: 4,
    from: { opacity: 0 },
  });

  const changeTab = useCallback((tabIndex: number): void => {
    setSelectedTab(tabIndex);
  }, []);

  const renderAnimatedBox = useMemo(
    () =>
      tabWidths.length > 0 ? (
        <animated.View style={springProps}>
          <View style={styles.innerView} />
        </animated.View>
      ) : null,

    [tabWidths, springProps]
  );

  useImperativeHandle(ref, () => ({
    changeTab,
  }));

  useEffect(() => {
    onChangeTab && onChangeTab(selectedTab);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedTab]);

  return (
    <View style={[styles.alignContainer, style]} {...restProps}>
      <Row style={styles.container}>
        <View style={styles.tabItemWrapper}>
          {tabs.map(renderTabItem)}
          {renderAnimatedBox}
        </View>
      </Row>
    </View>
  );
});

const styles = StyleSheet.create({
  alignContainer: {
    alignItems: "flex-start",
  },
  container: {
    borderRadius: 4,
    backgroundColor: COLORS.violet100,
  },
  tabItem: {
    borderRadius: 4,
    margin: 4,
  },
  tabItemWrapper: {
    display: "flex",
    flexDirection: "row",
  },
  innerView: {
    width: "100%",
    height: "100%",
    backgroundColor: COLORS.white,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 1,
    shadowOpacity: 0.4,
    borderRadius: 4,
  },
});

SegmentTab.displayName = "SegmentTab";

export default (SegmentTab);
