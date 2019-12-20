import React from 'react';
import { Text } from 'react-native';

export function MonoText({ style, ...rest}) {
  return (
    <Text {...rest} style={[style, { fontFamily: 'space-mono' }]} />
  );
}
