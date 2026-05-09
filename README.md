# Tree Structure Visualizer

A React-based visual tree-structure renderer that displays hierarchical data with clean spacing, clear parent-child relationships, and intuitive interactions.

## Features

### Core Features ✅
- **Proper Tree Layout** - Calculates optimal spacing between siblings
- **Parent Centering** - Parents automatically center above their entire group of children
- **Visual Edges** - SVG curved lines connect parent and child nodes
- **Expand/Collapse** - Click nodes to toggle subtree visibility
- **Smooth Recalculation** - Layout updates instantly when nodes are toggled
- **No Overlaps** - Advanced positioning algorithm prevents node overlap

### Bonus Features 🎨
- **Search & Highlight** - Find nodes and highlight matches with ancestor paths
- **Expand/Collapse All** - Quick buttons to manage entire tree state
- **Node Selection** - Visual feedback on node interaction
- **Hover Effects** - Interactive highlighting on hover
- **Responsive Design** - Works on desktop and tablet screens
- **Tree Statistics** - Display visible and expanded node counts
- **Zoom & Pan** - Ctrl+Scroll to zoom, Right-click+drag to pan

## Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Project Structure

```
src/
├── components/
│   ├── TreeVisualizer.jsx       # Main tree container
│   ├── TreeNode.jsx             # Individual node renderer
│   ├── TreeEdges.jsx            # Edge/connection renderer
│   ├── TreeControls.jsx         # Expand/Collapse buttons
│   ├── SearchBar.jsx            # Search functionality
│   └── styles/
│       ├── TreeVisualizer.css
│       ├── TreeNode.css
│       ├── TreeEdges.css
│       ├── TreeControls.css
│       └── SearchBar.css
├── hooks/
│   └── useTreeLayout.js         # Tree state & layout management
├── utils/
│   ├── layoutEngine.js          # Core positioning algorithm
│   ├── treeHelpers.js           # Tree traversal utilities
│   └── constants.js             # Configuration
├── App.jsx                      # Main application
├── App.css                      # Global styles
├── index.jsx                    # React entry point
└── index.css                    # Global CSS
```

## How It Works

### Layout Algorithm
1. Performs depth-first traversal of the tree
2. Calculates optimal width for each subtree
3. Centers each parent above its children group
4. Maintains configurable spacing between siblings
5. Increases vertical distance with tree depth

### Expand/Collapse
- Toggle nodes by clicking the circular button
- Children nodes are hidden when parent is collapsed
- Layout automatically recalculates positions
- Search highlights persist during collapse/expand

### Visual Design
- **Dark nodes** on light background for clarity
- **Orange toggle buttons** for expanded nodes
- **Green toggle buttons** for collapsed nodes
- **Curved connectors** showing parent-child relationships
- **Blue highlights** for selected nodes
- **Orange highlights** for search results

## Configuration

Edit `src/utils/constants.js` to customize:

```javascript
// Node dimensions
NODE_WIDTH: 120
NODE_HEIGHT: 50

// Spacing
HORIZONTAL_GAP: 40
VERTICAL_GAP: 100
VERTICAL_OFFSET: 60
```

## Example Usage

```jsx
import TreeVisualizer from './components/TreeVisualizer';

const sampleTree = {
  id: '1',
  label: 'Root',
  children: [
    {
      id: '2',
      label: 'Child 1',
      children: [
        { id: '4', label: 'Grandchild 1' },
        { id: '5', label: 'Grandchild 2' }
      ]
    },
    {
      id: '3',
      label: 'Child 2',
      children: []
    }
  ]
};

function App() {
  return <TreeVisualizer data={sampleTree} />;
}
```

## Tree Data Format

```javascript
{
  id: 'unique-id',
  label: 'Node Label',
  children: [
    // Array of child nodes with same structure
  ]
}
```

## Constraints Met

✅ Tree depth: 3-6 levels  
✅ No backend required; fully client-side  
✅ Simple spacing logic (no complex algorithms)  
✅ Performance optimized for typical use cases  

## Keyboard Shortcuts

- **Ctrl + Scroll** - Zoom in/out
- **Right-click + Drag** - Pan around tree
- **Click Node** - Select node
- **Click Toggle Button** - Expand/Collapse subtree

## License

MIT
