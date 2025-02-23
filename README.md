# React Native FlatList: Duplicate Key Error

This repository demonstrates a common error in React Native's `FlatList` component: inconsistent rendering caused by duplicate keys in the `keyExtractor` function.

## Problem

The `keyExtractor` function in `FlatList` must return a unique key for each item in the data array. If duplicate keys are used, `FlatList` may not render correctly, leading to unexpected behavior, such as items disappearing, being duplicated, or rendering in the wrong order.

## Solution

Ensure that the `keyExtractor` function always returns a unique key for each item.  This can often be achieved using the item's unique ID, or a combination of fields to create a unique identifier. If no unique ID is available, consider generating one using a library like `uuid`.

## How to Reproduce

1. Clone this repository.
2. Run `npm install`.
3. Run `npx react-native run-android` or `npx react-native run-ios`.
4. Observe the inconsistent rendering of the `FlatList`.
5. Uncomment the corrected `keyExtractor` function in `bugSolution.js` to see the fix.
