'use client';

import { Check, ChevronRight, Layers, Map, Minus, Navigation } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useState } from 'react';

import { Checkbox } from '@/components/ui/checkbox';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

interface LayerItem {
  name: string;
  checked: boolean;
  children?: LayerItem[];
}

interface MapLayersDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function MapLayersDrawer({ open, onOpenChange }: MapLayersDrawerProps) {
  const [activeTab, setActiveTab] = useState('layers');
  const [searchQuery, setSearchQuery] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  // Control visibility with animation
  useEffect(() => {
    if (open) {
      setIsVisible(true);
    } else {
      // We'll handle closing in the onAnimationComplete callback
    }
  }, [open]);

  // Handle animation complete
  const handleAnimationComplete = (definition: string) => {
    if (definition === 'exit') {
      setIsVisible(false);
      // Ensure we call onOpenChange to update the parent state
      onOpenChange(false);
    }
  };

  // Initial layer data with nested structure
  const [layers, setLayers] = useState<LayerItem[]>([
    {
      name: 'Public Makani Data',
      checked: true,
      children: [
        { name: 'Buildings', checked: true },
        { name: 'Roads', checked: true },
        { name: 'Points of Interest', checked: false },
      ],
    },
    {
      name: 'Public Data',
      checked: true,
      children: [
        { name: 'Administrative Boundaries', checked: true },
        { name: 'Terrain', checked: false },
        { name: 'Satellite Imagery', checked: true },
      ],
    },
  ]);

  // Calculate indeterminate states for all layers
  const layersWithIndeterminateState = layers.map((layer) => {
    if (!layer.children || layer.children.length === 0) {
      return { ...layer, indeterminate: false };
    }

    const checkedCount = layer.children.filter((child) => child.checked).length;
    const totalCount = layer.children.length;

    // Layer is indeterminate if some but not all children are checked
    const indeterminate = checkedCount > 0 && checkedCount < totalCount;

    return { ...layer, indeterminate };
  });

  // Toggle layer checked state (including all children)
  const toggleLayer = (layerIndex: number, checked: boolean) => {
    setLayers((prevLayers) => {
      const newLayers = [...prevLayers];
      const layer = { ...newLayers[layerIndex] };

      // Update the parent layer
      layer.checked = checked;

      // Update all children if they exist
      if (layer.children) {
        layer.children = layer.children.map((child) => ({
          ...child,
          checked,
        }));
      }

      newLayers[layerIndex] = layer;
      return newLayers;
    });
  };

  // Toggle a child layer
  const toggleChildLayer = (parentIndex: number, childIndex: number, checked: boolean) => {
    setLayers((prevLayers) => {
      const newLayers = [...prevLayers];

      // Make sure parent and children exist
      if (!newLayers[parentIndex] || !newLayers[parentIndex].children) {
        return newLayers;
      }

      // Create a new parent with updated children
      const parent = { ...newLayers[parentIndex] };
      const newChildren = [...parent.children!];

      // Update the specific child
      newChildren[childIndex] = {
        ...newChildren[childIndex],
        checked,
      };

      // Update parent's children
      parent.children = newChildren;

      // Update parent's checked state based on children
      const allChecked = newChildren.every((child) => child.checked);
      parent.checked = allChecked;

      // Update the parent in the layers array
      newLayers[parentIndex] = parent;

      return newLayers;
    });
  };

  // Check if a layer is in indeterminate state (some children checked, some not)
  const isIndeterminate = (layer: LayerItem): boolean => {
    if (!layer.children || layer.children.length === 0) return false;

    const checkedCount = layer.children.filter((child) => child.checked).length;
    const totalCount = layer.children.length;

    // Indeterminate if some but not all children are checked
    return checkedCount > 0 && checkedCount < totalCount;
  };

  // Filter layers based on search query
  const filteredLayers = layersWithIndeterminateState.filter(
    (layer) =>
      layer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      layer.children?.some((child) => child.name.toLowerCase().includes(searchQuery.toLowerCase())),
  );

  // Animation variants for the drawer
  const drawerVariants = {
    hidden: {
      x: '100%',
      opacity: 0.5,
      scale: 0.98,
      transition: {
        type: 'spring',
        damping: 25,
        stiffness: 300,
      },
    },
    visible: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        damping: 20,
        stiffness: 300,
        mass: 1,
        bounce: 0.4,
      },
    },
    exit: {
      x: '100%',
      opacity: 0,
      scale: 0.96,
      transition: {
        type: 'spring',
        damping: 25,
        stiffness: 300,
        duration: 0.5,
      },
    },
  };

  // Custom close handler to trigger exit animation
  const handleClose = () => {
    debugger;
    // This will trigger the exit animation
    // The actual closing happens in onAnimationComplete
    onOpenChange(false);
  };

  return (
    // <div className='relative inset-0 z-50 h-full w-full'>
    <>
      <AnimatePresence onExitComplete={() => setIsVisible(false)}>
        {open && (
          <motion.div
            key='drawer-content'
            className='max-h-[calc(100% - 2rem)] pointer-events-auto absolute end-4 top-4 bottom-4 z-50 h-auto w-[350px] max-w-[calc(100%-2rem)]'
            initial='hidden'
            animate='visible'
            exit='exit'
            variants={drawerVariants}
            onAnimationComplete={handleAnimationComplete}
          >
            <div className='flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-lg'>
              {/* Header with tabs */}
              <div className='px-6 pt-4 pb-0'>
                <div className='mb-2 flex items-center justify-between'>
                  <button
                    onClick={() => setActiveTab('layers')}
                    className={cn(
                      'flex items-center gap-2 p-2 transition-colors',
                      activeTab === 'layers'
                        ? 'text-[#5ecfc0]'
                        : 'text-gray-400 hover:text-gray-500',
                    )}
                  >
                    <Layers className='h-6 w-6' />
                    <span
                      className={cn(
                        'font-medium',
                        activeTab === 'layers' ? 'text-gray-700' : 'text-gray-400',
                      )}
                    >
                      Layers
                    </span>
                  </button>
                  <button
                    onClick={() => setActiveTab('navigation')}
                    className={cn(
                      'flex items-center gap-2 p-2 transition-colors',
                      activeTab === 'navigation'
                        ? 'text-[#5ecfc0]'
                        : 'text-gray-400 hover:text-gray-500',
                    )}
                  >
                    <Navigation className='h-6 w-6' />
                    <span
                      className={cn(
                        'font-medium',
                        activeTab === 'navigation' ? 'text-gray-700' : 'text-gray-400',
                      )}
                    >
                      Navigation
                    </span>
                  </button>
                </div>
                {/* Tab indicator */}
                <div className='mb-4 h-1 rounded-full bg-gray-100'>
                  <motion.div
                    className='h-full rounded-full bg-[#5ecfc0]'
                    initial={false}
                    animate={{
                      marginLeft: activeTab === 'layers' ? '0%' : '50%',
                    }}
                    transition={{
                      type: 'spring',
                      stiffness: 300,
                      damping: 30,
                    }}
                    style={{ width: '50%' }}
                  />
                </div>
                {/* Search input - only show for layers tab */}
                <AnimatePresence mode='wait'>
                  {activeTab === 'layers' && (
                    <motion.div
                      className='mb-4'
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Input
                        type='text'
                        placeholder='Search Layers'
                        className='w-full rounded-md border-gray-200 text-gray-500 placeholder:text-gray-400'
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              {/* Content area */}
              <div className='flex-1 overflow-y-auto rounded-t-3xl bg-gray-50 px-6 pt-4 pb-6'>
                <AnimatePresence mode='wait'>
                  {/* Layers tab content */}
                  {activeTab === 'layers' && (
                    <motion.div
                      className='space-y-1'
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      {filteredLayers.map((layer, layerIndex) => {
                        // Calculate indeterminate state for this layer
                        const indeterminate = isIndeterminate(layer);

                        return (
                          <Collapsible
                            key={layerIndex}
                            className='border-b border-gray-100 pb-1 last:border-0'
                          >
                            <div className='flex items-center space-x-3 py-2'>
                              <div className='flex h-4 w-4 items-center justify-center'>
                                <CustomCheckbox
                                  id={`layer-${layerIndex}`}
                                  checked={layer.checked}
                                  indeterminate={indeterminate}
                                  onCheckedChange={(checked) =>
                                    toggleLayer(layerIndex, checked === true)
                                  }
                                  className='border-gray-300'
                                />
                              </div>
                              <div className='flex h-4 w-4 items-center justify-center'>
                                <div className='h-0 w-0 border-t-4 border-b-4 border-l-6 border-t-transparent border-b-transparent border-l-[#5ecfc0]' />
                              </div>
                              <label
                                htmlFor={`layer-${layerIndex}`}
                                className='flex-1 cursor-pointer text-base font-medium text-gray-500'
                              >
                                {layer.name}
                              </label>
                              {layer.children && layer.children.length > 0 && (
                                <CollapsibleTrigger className='rounded-sm p-1 hover:bg-gray-100'>
                                  <ChevronRight className='ui-open:rotate-90 h-4 w-4 text-gray-400 transition-transform' />
                                </CollapsibleTrigger>
                              )}
                            </div>
                            {layer.children && layer.children.length > 0 && (
                              <CollapsibleContent className='space-y-1 pl-8'>
                                {layer.children.map((child, childIndex) => (
                                  <motion.div
                                    key={childIndex}
                                    className='flex items-center space-x-3 py-1.5'
                                    initial={{ opacity: 0, y: -5 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: childIndex * 0.05 }}
                                  >
                                    <div className='flex h-4 w-4 items-center justify-center'>
                                      <Checkbox
                                        id={`child-${layerIndex}-${childIndex}`}
                                        checked={child.checked}
                                        onCheckedChange={(checked) =>
                                          toggleChildLayer(layerIndex, childIndex, checked === true)
                                        }
                                        className='border-gray-300'
                                      />
                                    </div>
                                    <div className='flex h-4 w-4 items-center justify-center'>
                                      <div className='h-0 w-0 border-t-3 border-b-3 border-l-5 border-t-transparent border-b-transparent border-l-gray-300' />
                                    </div>
                                    <label
                                      htmlFor={`child-${layerIndex}-${childIndex}`}
                                      className='cursor-pointer text-sm text-gray-500'
                                    >
                                      {child.name}
                                    </label>
                                  </motion.div>
                                ))}
                              </CollapsibleContent>
                            )}
                          </Collapsible>
                        );
                      })}
                    </motion.div>
                  )}
                  {/* Navigation tab content */}
                  {activeTab === 'navigation' && (
                    <motion.div
                      className='flex h-full flex-col items-center justify-center text-gray-500'
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Map className='mb-2 h-12 w-12 text-gray-300' />
                      <p className='text-center'>Navigation options will appear here</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// Custom checkbox component that properly handles indeterminate state
function CustomCheckbox({
  checked,
  indeterminate,
  onCheckedChange,
  className,
  id,
}: {
  checked: boolean;
  indeterminate: boolean;
  onCheckedChange: (checked: boolean) => void;
  className?: string;
  id?: string;
}) {
  // Create a completely custom checkbox to avoid the issue with both icons showing
  return (
    <button
      id={id}
      type='button'
      role='checkbox'
      aria-checked={indeterminate ? 'mixed' : checked}
      data-state={indeterminate ? 'indeterminate' : checked ? 'checked' : 'unchecked'}
      className={cn(
        'flex h-4 w-4 shrink-0 items-center justify-center rounded-sm border border-gray-300',
        'focus-visible:ring-ring focus:ring-0 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none',
        'bg-white disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      onClick={() => onCheckedChange(!checked)}
    >
      {indeterminate ? (
        <Minus className='h-3 w-3 text-black' />
      ) : checked ? (
        <Check className='h-3 w-3 text-black' />
      ) : null}
    </button>
  );
}
