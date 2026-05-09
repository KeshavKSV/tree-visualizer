// Tree layout configuration constants
export const TREE_CONFIG = {
  // Node dimensions
  NODE_WIDTH: 120,
  NODE_HEIGHT: 50,
  
  // Spacing configuration
  HORIZONTAL_GAP: 40,      // Space between sibling nodes
  VERTICAL_GAP: 100,       // Space between tree levels
  VERTICAL_OFFSET: 60,     // Offset for node positioning
  
  // Animation timing
  ANIMATION_DURATION: 300, // ms
  
  // Search configuration
  SEARCH_HIGHLIGHT_COLOR: '#FF8C00',
  SELECTION_COLOR: '#4A90E2',
  
  // Edge configuration
  EDGE_STROKE_WIDTH: 2,
  EDGE_COLOR: '#999',
  EDGE_COLOR_HOVER: '#333'
};

// Node style presets
export const NODE_STYLES = {
  default: {
    background: '#2C3E50',
    color: '#FFFFFF',
    border: '2px solid #34495E'
  },
  expanded: {
    background: '#3498DB',
    color: '#FFFFFF',
    border: '2px solid #2980B9'
  },
  collapsed: {
    background: '#95A5A6',
    color: '#FFFFFF',
    border: '2px solid #7F8C8D'
  },
  selected: {
    background: '#E74C3C',
    color: '#FFFFFF',
    border: '2px solid #C0392B',
    boxShadow: '0 0 10px rgba(231, 76, 60, 0.5)'
  },
  highlighted: {
    background: '#F39C12',
    color: '#FFFFFF',
    border: '2px solid #D68910'
  }
};
