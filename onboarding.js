import {Text, View} from 'react-native';
import React, {Component} from 'react';
import { IndicatorViewPager, PagerDotIndicator} from 'rn-viewpager';

export default class Onboarding extends Component {
    render() {
        return (
            <View style={styles.container}>
                <IndicatorViewPager
                    style={styles.indicatorViewPager}
                    indicator={this._renderDotIndicator()}>
                    <View style={styles.firstView}>
                        <Text>page one</Text>
                    </View>
                    <View style={styles.secondView}>
                        <Text>page two</Text>
                    </View>
                    <View style={styles.thirdView}>
                        <Text>page three</Text>
                    </View>
                </IndicatorViewPager>
            </View>
        );
    }

    _renderDotIndicator() {
        return <PagerDotIndicator pageCount={3} />;
    }

}
const cadetblue = 'cadetblue';
const cornflowerblue = 'cornflowerblue';
const green = '#1AA094';

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	indicatorViewPager: {
		flex: 1,
		flexDirection: 'column'
	},
	firstView: {
		backgroundColor: cadetblue
	},
	secondView: {
		backgroundColor: cornflowerblue
	},
	thirdView: {
		backgroundColor: green
	}
});
