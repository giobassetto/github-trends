import React from 'react';
import { FontAwesome5 } from '@expo/vector-icons';

export default function TabBarIcon({ name, focused }) {
  return (
    <FontAwesome5
      name={name}
      size={26}
      style={{ marginBottom: -3 }}
      color={focused ? '#fff' : '#d4bff9'}
    />
  );
}
