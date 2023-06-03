import * as React from 'react';
import { View, Text } from 'react-native';

export default function HealthScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text
                onPress={() => alert('This is the "Health" screen.')}
                style={{ fontSize: 26, fontWeight: 'bold' }}>Health Screennnn</Text>
        </View>
    );
}