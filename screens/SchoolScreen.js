import * as React from 'react';
import { View, Text } from 'react-native';

export default function SchoolScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text
                onPress={() => alert('This is the "School" screen.')}
                style={{ fontSize: 26, fontWeight: 'bold' }}>School Screen</Text>
        </View>
    );
}