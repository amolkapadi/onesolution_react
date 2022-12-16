import React from 'react';
import { MarkerType, Position } from 'reactflow';

export const nodes = [
  {
    id: '1',
    type: 'input',
    data: {
      label: 'Teams Meeting Flow',
    },
    position: { x: 250, y: 0 },
  },
  {
    id: '2',
    data: {
      label: 'Voice Input',
    },
    position: { x: 350, y: 200 },
  },
  
  {
    id: '3',
    data: {
      label: 'AI Process Modeller',
    },
    position: { x: 500, y: 0   },
  },
  {
    id: '4',
    type: 'Input',
    data: {
      label: 'Text Input',
    },
    position: { x: 400, y: 100 },
  },
  {
    id: '5',
    type: 'custom',
    position: { x: 100, y: 200 },
    data: {
      selects: {
        'handle-0': 'smoothstep',
        'handle-1': 'smoothstep',
      },
    },
  },
  {
    id: '6',
    type: 'Output',
    data: {
      label: 'End',
    },
    className: 'circle',
    style: {
      background: '#2B6CB0',
      color: 'white',
    },
    position: { x: 400, y: 200 },
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
  },
  {
    id: '7',
    type: 'Input',
    style: {
      background: '#63B3ED',
      color: 'white',
      width: 100,
    },
    data: {
      label: 'Meeting Entry',
    },
    position: { x: 400, y: 325 },
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
  },
  ,
  {
    id: '8',
    type: 'Input',
    style: {
      background: '#63B3FF',
      color: 'white',
      width: 100,
    },
    data: {
      label: 'Task Entry',
    },
    position: { x: 400, y: 325 },
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
  },
  ,
  {
    id: '9',
    type: 'Input',
    style: {
      background: '#63B3EE',
      color: 'white',
      width: 100,
    },
    data: {
      label: 'Timeshee Entry',
    },
    position: { x: 400, y: 325 },
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
  },
  // {
  //   id: '8',
  //   type: 'default',
  //   className: 'annotation',
  //   data: {
  //     label: (
  //       <>
  //         On the bottom left you see the <strong>Controls</strong> and the bottom right the{' '}
  //         <strong>MiniMap</strong>. This is also just a node 🥳
  //       </>
  //     ),
  //   },
  //   draggable: false,
  //   selectable: false,
  //   position: { x: 150, y: 400 },
  // },
];

export const edges = [
  { id: 'e1-1', source: '1', target: '2', label: 'Voice Processing' },
  { id: 'e1-2', source: '1', target: '4', label: 'Text Processing' },
  { id: 'e1-3', source: '2', target: '3', animated: true },
  { id: 'e1-4', source: '4', target: '3', animated: true },
  { id: 'e1-5', source: '3', target: '7', animated: true },
  { id: 'e1-6', source: '3', target: '8', animated: true },
  { id: 'e1-7', source: '3', target: '9', animated: true },
  { id: 'e1-8', source: '7', target: '6', animated: true },
  { id: 'e1-9', source: '8', target: '6', animated: true },
  { id: 'e1-10', source: '9', target: '6', animated: true },
  
  // },
  // {
  //   id: 'e4-6',
  //   source: '4',
  //   target: '6',
  //   type: 'smoothstep',
  //   sourceHandle: 'handle-1',
  //   data: {
  //     selectIndex: 1,
  //   },
  //   markerEnd: {
  //     type: MarkerType.ArrowClosed,
  //   },
  // },
];