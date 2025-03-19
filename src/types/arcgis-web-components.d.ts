/// <reference types="@arcgis/map-components" preserve="true" />
import * as React from 'react';
import type { EventName } from '@lit/react';
console.log('✅ Loaded global.d.ts');

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'arcgis-map': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        itemId?: string;
        onarcgisViewReadyChange?: (event: CustomEvent) => void;
      };
      'arcgis-search': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        position?: string;
      };
      'arcgis-legend': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        position?: string;
      };
    }
  }
}
export declare const ArcgisAreaMeasurement2d: import('@lit/react').ReactWebComponent<
  HTMLArcgisAreaMeasurement2dElement & {
    class?: string;
  },
  {
    onArcgisPropertyChange: EventName<HTMLArcgisAreaMeasurement2dElement['arcgisPropertyChange']>;
    onArcgisReady: EventName<HTMLArcgisAreaMeasurement2dElement['arcgisReady']>;
  }
>;
export declare const ArcgisAreaMeasurement3d: import('@lit/react').ReactWebComponent<
  HTMLArcgisAreaMeasurement3dElement & {
    class?: string;
  },
  {
    onArcgisPropertyChange: EventName<HTMLArcgisAreaMeasurement3dElement['arcgisPropertyChange']>;
    onArcgisReady: EventName<HTMLArcgisAreaMeasurement3dElement['arcgisReady']>;
  }
>;
export declare const ArcgisAttachments: import('@lit/react').ReactWebComponent<
  HTMLArcgisAttachmentsElement & {
    class?: string;
  },
  {
    onArcgisPropertyChange: EventName<HTMLArcgisAttachmentsElement['arcgisPropertyChange']>;
    onArcgisReady: EventName<HTMLArcgisAttachmentsElement['arcgisReady']>;
  }
>;
export declare const ArcgisBasemapGallery: import('@lit/react').ReactWebComponent<
  HTMLArcgisBasemapGalleryElement & {
    class?: string;
  },
  {
    onArcgisPropertyChange: EventName<HTMLArcgisBasemapGalleryElement['arcgisPropertyChange']>;
    onArcgisReady: EventName<HTMLArcgisBasemapGalleryElement['arcgisReady']>;
  }
>;
export declare const ArcgisBasemapLayerList: import('@lit/react').ReactWebComponent<
  HTMLArcgisBasemapLayerListElement & {
    class?: string;
  },
  {
    onArcgisPropertyChange: EventName<HTMLArcgisBasemapLayerListElement['arcgisPropertyChange']>;
    onArcgisReady: EventName<HTMLArcgisBasemapLayerListElement['arcgisReady']>;
    onArcgisTriggerAction: EventName<HTMLArcgisBasemapLayerListElement['arcgisTriggerAction']>;
  }
>;
export declare const ArcgisBasemapToggle: import('@lit/react').ReactWebComponent<
  HTMLArcgisBasemapToggleElement & {
    class?: string;
  },
  {
    onArcgisPropertyChange: EventName<HTMLArcgisBasemapToggleElement['arcgisPropertyChange']>;
    onArcgisReady: EventName<HTMLArcgisBasemapToggleElement['arcgisReady']>;
  }
>;
export declare const ArcgisBookmarks: import('@lit/react').ReactWebComponent<
  HTMLArcgisBookmarksElement & {
    class?: string;
  },
  {
    onArcgisEdit: EventName<HTMLArcgisBookmarksElement['arcgisEdit']>;
    onArcgisPropertyChange: EventName<HTMLArcgisBookmarksElement['arcgisPropertyChange']>;
    onArcgisReady: EventName<HTMLArcgisBookmarksElement['arcgisReady']>;
    onArcgisSelect: EventName<HTMLArcgisBookmarksElement['arcgisSelect']>;
  }
>;
export declare const ArcgisBuildingExplorer: import('@lit/react').ReactWebComponent<
  HTMLArcgisBuildingExplorerElement & {
    class?: string;
  },
  {
    onArcgisPropertyChange: EventName<HTMLArcgisBuildingExplorerElement['arcgisPropertyChange']>;
    onArcgisReady: EventName<HTMLArcgisBuildingExplorerElement['arcgisReady']>;
  }
>;
export declare const ArcgisCatalogLayerList: import('@lit/react').ReactWebComponent<
  HTMLArcgisCatalogLayerListElement & {
    class?: string;
  },
  {
    onArcgisPropertyChange: EventName<HTMLArcgisCatalogLayerListElement['arcgisPropertyChange']>;
    onArcgisReady: EventName<HTMLArcgisCatalogLayerListElement['arcgisReady']>;
    onArcgisTriggerAction: EventName<HTMLArcgisCatalogLayerListElement['arcgisTriggerAction']>;
  }
>;
export declare const ArcgisCompass: import('@lit/react').ReactWebComponent<
  HTMLArcgisCompassElement & {
    class?: string;
  },
  {
    onArcgisPropertyChange: EventName<HTMLArcgisCompassElement['arcgisPropertyChange']>;
    onArcgisReady: EventName<HTMLArcgisCompassElement['arcgisReady']>;
  }
>;
export declare const ArcgisCoordinateConversion: import('@lit/react').ReactWebComponent<
  HTMLArcgisCoordinateConversionElement & {
    class?: string;
  },
  {
    onArcgisPropertyChange: EventName<
      HTMLArcgisCoordinateConversionElement['arcgisPropertyChange']
    >;
    onArcgisReady: EventName<HTMLArcgisCoordinateConversionElement['arcgisReady']>;
  }
>;
export declare const ArcgisDaylight: import('@lit/react').ReactWebComponent<
  HTMLArcgisDaylightElement & {
    class?: string;
  },
  {
    onArcgisReady: EventName<HTMLArcgisDaylightElement['arcgisReady']>;
  }
>;
export declare const ArcgisDirectionalPad: import('@lit/react').ReactWebComponent<
  HTMLArcgisDirectionalPadElement & {
    class?: string;
  },
  {
    onArcgisPropertyChange: EventName<HTMLArcgisDirectionalPadElement['arcgisPropertyChange']>;
    onArcgisReady: EventName<HTMLArcgisDirectionalPadElement['arcgisReady']>;
  }
>;
export declare const ArcgisDirections: import('@lit/react').ReactWebComponent<
  HTMLArcgisDirectionsElement & {
    class?: string;
  },
  {
    onArcgisPropertyChange: EventName<HTMLArcgisDirectionsElement['arcgisPropertyChange']>;
    onArcgisReady: EventName<HTMLArcgisDirectionsElement['arcgisReady']>;
  }
>;
export declare const ArcgisDirectlineMeasurement3d: import('@lit/react').ReactWebComponent<
  HTMLArcgisDirectlineMeasurement3dElement & {
    class?: string;
  },
  {
    onArcgisPropertyChange: EventName<
      HTMLArcgisDirectlineMeasurement3dElement['arcgisPropertyChange']
    >;
    onArcgisReady: EventName<HTMLArcgisDirectlineMeasurement3dElement['arcgisReady']>;
  }
>;
export declare const ArcgisDistanceMeasurement2d: import('@lit/react').ReactWebComponent<
  HTMLArcgisDistanceMeasurement2dElement & {
    class?: string;
  },
  {
    onArcgisPropertyChange: EventName<
      HTMLArcgisDistanceMeasurement2dElement['arcgisPropertyChange']
    >;
    onArcgisReady: EventName<HTMLArcgisDistanceMeasurement2dElement['arcgisReady']>;
  }
>;
export declare const ArcgisEditor: import('@lit/react').ReactWebComponent<
  HTMLArcgisEditorElement & {
    class?: string;
  },
  {
    onArcgisPropertyChange: EventName<HTMLArcgisEditorElement['arcgisPropertyChange']>;
    onArcgisReady: EventName<HTMLArcgisEditorElement['arcgisReady']>;
  }
>;
export declare const ArcgisElevationProfile: import('@lit/react').ReactWebComponent<
  HTMLArcgisElevationProfileElement & {
    class?: string;
  },
  {
    onArcgisPropertyChange: EventName<HTMLArcgisElevationProfileElement['arcgisPropertyChange']>;
    onArcgisReady: EventName<HTMLArcgisElevationProfileElement['arcgisReady']>;
  }
>;
export declare const ArcgisExpand: import('@lit/react').ReactWebComponent<
  HTMLArcgisExpandElement & {
    class?: string;
  },
  {
    onArcgisReady: EventName<HTMLArcgisExpandElement['arcgisReady']>;
  }
>;
export declare const ArcgisFeature: import('@lit/react').ReactWebComponent<
  HTMLArcgisFeatureElement & {
    class?: string;
  },
  {
    onArcgisPropertyChange: EventName<HTMLArcgisFeatureElement['arcgisPropertyChange']>;
    onArcgisReady: EventName<HTMLArcgisFeatureElement['arcgisReady']>;
  }
>;
export declare const ArcgisFeatureForm: import('@lit/react').ReactWebComponent<
  HTMLArcgisFeatureFormElement & {
    class?: string;
  },
  {
    onArcgisPropertyChange: EventName<HTMLArcgisFeatureFormElement['arcgisPropertyChange']>;
    onArcgisReady: EventName<HTMLArcgisFeatureFormElement['arcgisReady']>;
    onArcgisSubmit: EventName<HTMLArcgisFeatureFormElement['arcgisSubmit']>;
    onArcgisValueChange: EventName<HTMLArcgisFeatureFormElement['arcgisValueChange']>;
  }
>;
export declare const ArcgisFeatureTable: import('@lit/react').ReactWebComponent<
  HTMLArcgisFeatureTableElement & {
    class?: string;
  },
  {
    onArcgisCellClick: EventName<HTMLArcgisFeatureTableElement['arcgisCellClick']>;
    onArcgisCellKeydown: EventName<HTMLArcgisFeatureTableElement['arcgisCellKeydown']>;
    onArcgisCellPointerout: EventName<HTMLArcgisFeatureTableElement['arcgisCellPointerout']>;
    onArcgisCellPointerover: EventName<HTMLArcgisFeatureTableElement['arcgisCellPointerover']>;
    onArcgisColumnReorder: EventName<HTMLArcgisFeatureTableElement['arcgisColumnReorder']>;
    onArcgisPropertyChange: EventName<HTMLArcgisFeatureTableElement['arcgisPropertyChange']>;
    onArcgisReady: EventName<HTMLArcgisFeatureTableElement['arcgisReady']>;
    onArcgisSelectionChange: EventName<HTMLArcgisFeatureTableElement['arcgisSelectionChange']>;
  }
>;
export declare const ArcgisFeatureTemplates: import('@lit/react').ReactWebComponent<
  HTMLArcgisFeatureTemplatesElement & {
    class?: string;
  },
  {
    onArcgisPropertyChange: EventName<HTMLArcgisFeatureTemplatesElement['arcgisPropertyChange']>;
    onArcgisReady: EventName<HTMLArcgisFeatureTemplatesElement['arcgisReady']>;
    onArcgisSelect: EventName<HTMLArcgisFeatureTemplatesElement['arcgisSelect']>;
  }
>;
export declare const ArcgisFeatures: import('@lit/react').ReactWebComponent<
  HTMLArcgisFeaturesElement & {
    class?: string;
  },
  {
    onArcgisPropertyChange: EventName<HTMLArcgisFeaturesElement['arcgisPropertyChange']>;
    onArcgisReady: EventName<HTMLArcgisFeaturesElement['arcgisReady']>;
    onArcgisTriggerAction: EventName<HTMLArcgisFeaturesElement['arcgisTriggerAction']>;
  }
>;
export declare const ArcgisFloorFilter: import('@lit/react').ReactWebComponent<
  HTMLArcgisFloorFilterElement & {
    class?: string;
  },
  {
    onArcgisReady: EventName<HTMLArcgisFloorFilterElement['arcgisReady']>;
  }
>;
export declare const ArcgisFullscreen: import('@lit/react').ReactWebComponent<
  HTMLArcgisFullscreenElement & {
    class?: string;
  },
  {
    onArcgisPropertyChange: EventName<HTMLArcgisFullscreenElement['arcgisPropertyChange']>;
    onArcgisReady: EventName<HTMLArcgisFullscreenElement['arcgisReady']>;
  }
>;
export declare const ArcgisHistogram: import('@lit/react').ReactWebComponent<
  HTMLArcgisHistogramElement & {
    class?: string;
  },
  {
    onArcgisPropertyChange: EventName<HTMLArcgisHistogramElement['arcgisPropertyChange']>;
    onArcgisReady: EventName<HTMLArcgisHistogramElement['arcgisReady']>;
  }
>;
export declare const ArcgisHistogramRangeSlider: import('@lit/react').ReactWebComponent<
  HTMLArcgisHistogramRangeSliderElement & {
    class?: string;
  },
  {
    onArcgisPropertyChange: EventName<
      HTMLArcgisHistogramRangeSliderElement['arcgisPropertyChange']
    >;
    onArcgisReady: EventName<HTMLArcgisHistogramRangeSliderElement['arcgisReady']>;
  }
>;
export declare const ArcgisHome: import('@lit/react').ReactWebComponent<
  HTMLArcgisHomeElement & {
    class?: string;
  },
  {
    onArcgisGo: EventName<HTMLArcgisHomeElement['arcgisGo']>;
    onArcgisPropertyChange: EventName<HTMLArcgisHomeElement['arcgisPropertyChange']>;
    onArcgisReady: EventName<HTMLArcgisHomeElement['arcgisReady']>;
  }
>;
export declare const ArcgisLayerList: import('@lit/react').ReactWebComponent<
  HTMLArcgisLayerListElement & {
    class?: string;
  },
  {
    onArcgisPropertyChange: EventName<HTMLArcgisLayerListElement['arcgisPropertyChange']>;
    onArcgisReady: EventName<HTMLArcgisLayerListElement['arcgisReady']>;
    onArcgisTriggerAction: EventName<HTMLArcgisLayerListElement['arcgisTriggerAction']>;
  }
>;
export declare const ArcgisLegend: import('@lit/react').ReactWebComponent<
  HTMLArcgisLegendElement & {
    class?: string;
  },
  {
    onArcgisPropertyChange: EventName<HTMLArcgisLegendElement['arcgisPropertyChange']>;
    onArcgisReady: EventName<HTMLArcgisLegendElement['arcgisReady']>;
  }
>;
export declare const ArcgisLineOfSight: import('@lit/react').ReactWebComponent<
  HTMLArcgisLineOfSightElement & {
    class?: string;
  },
  {
    onArcgisPropertyChange: EventName<HTMLArcgisLineOfSightElement['arcgisPropertyChange']>;
    onArcgisReady: EventName<HTMLArcgisLineOfSightElement['arcgisReady']>;
  }
>;
export declare const ArcgisLinkChart: import('@lit/react').ReactWebComponent<
  HTMLArcgisLinkChartElement & {
    class?: string;
  },
  {
    onArcgisViewChange: EventName<HTMLArcgisLinkChartElement['arcgisViewChange']>;
    onArcgisViewClick: EventName<HTMLArcgisLinkChartElement['arcgisViewClick']>;
    onArcgisViewDoubleClick: EventName<HTMLArcgisLinkChartElement['arcgisViewDoubleClick']>;
    onArcgisViewDrag: EventName<HTMLArcgisLinkChartElement['arcgisViewDrag']>;
    onArcgisViewHold: EventName<HTMLArcgisLinkChartElement['arcgisViewHold']>;
    onArcgisViewImmediateClick: EventName<HTMLArcgisLinkChartElement['arcgisViewImmediateClick']>;
    onArcgisViewImmediateDoubleClick: EventName<
      HTMLArcgisLinkChartElement['arcgisViewImmediateDoubleClick']
    >;
    onArcgisViewKeyDown: EventName<HTMLArcgisLinkChartElement['arcgisViewKeyDown']>;
    onArcgisViewKeyUp: EventName<HTMLArcgisLinkChartElement['arcgisViewKeyUp']>;
    onArcgisViewLayerviewCreate: EventName<HTMLArcgisLinkChartElement['arcgisViewLayerviewCreate']>;
    onArcgisViewLayerviewCreateError: EventName<
      HTMLArcgisLinkChartElement['arcgisViewLayerviewCreateError']
    >;
    onArcgisViewLayerviewDestroy: EventName<
      HTMLArcgisLinkChartElement['arcgisViewLayerviewDestroy']
    >;
    onArcgisViewMouseWheel: EventName<HTMLArcgisLinkChartElement['arcgisViewMouseWheel']>;
    onArcgisViewPointerDown: EventName<HTMLArcgisLinkChartElement['arcgisViewPointerDown']>;
    onArcgisViewPointerEnter: EventName<HTMLArcgisLinkChartElement['arcgisViewPointerEnter']>;
    onArcgisViewPointerLeave: EventName<HTMLArcgisLinkChartElement['arcgisViewPointerLeave']>;
    onArcgisViewPointerMove: EventName<HTMLArcgisLinkChartElement['arcgisViewPointerMove']>;
    onArcgisViewPointerUp: EventName<HTMLArcgisLinkChartElement['arcgisViewPointerUp']>;
    onArcgisViewReadyChange: EventName<HTMLArcgisLinkChartElement['arcgisViewReadyChange']>;
  }
>;
export declare const ArcgisLinkChartLayoutSwitcher: import('@lit/react').ReactWebComponent<
  HTMLArcgisLinkChartLayoutSwitcherElement & {
    class?: string;
  },
  {
    onArcgisPropertyChange: EventName<
      HTMLArcgisLinkChartLayoutSwitcherElement['arcgisPropertyChange']
    >;
    onArcgisReady: EventName<HTMLArcgisLinkChartLayoutSwitcherElement['arcgisReady']>;
    onArcgisSwitchLayout: EventName<HTMLArcgisLinkChartLayoutSwitcherElement['arcgisSwitchLayout']>;
  }
>;
export declare const ArcgisLocate: import('@lit/react').ReactWebComponent<
  HTMLArcgisLocateElement & {
    class?: string;
  },
  {
    onArcgisError: EventName<HTMLArcgisLocateElement['arcgisError']>;
    onArcgisPropertyChange: EventName<HTMLArcgisLocateElement['arcgisPropertyChange']>;
    onArcgisReady: EventName<HTMLArcgisLocateElement['arcgisReady']>;
    onArcgisSuccess: EventName<HTMLArcgisLocateElement['arcgisSuccess']>;
  }
>;
export declare const ArcgisMap: import('@lit/react').ReactWebComponent<
  HTMLArcgisMapElement & {
    class?: string;
  },
  {
    onArcgisViewChange: EventName<HTMLArcgisMapElement['arcgisViewChange']>;
    onArcgisViewClick: EventName<HTMLArcgisMapElement['arcgisViewClick']>;
    onArcgisViewDoubleClick: EventName<HTMLArcgisMapElement['arcgisViewDoubleClick']>;
    onArcgisViewDrag: EventName<HTMLArcgisMapElement['arcgisViewDrag']>;
    onArcgisViewHold: EventName<HTMLArcgisMapElement['arcgisViewHold']>;
    onArcgisViewImmediateClick: EventName<HTMLArcgisMapElement['arcgisViewImmediateClick']>;
    onArcgisViewImmediateDoubleClick: EventName<
      HTMLArcgisMapElement['arcgisViewImmediateDoubleClick']
    >;
    onArcgisViewKeyDown: EventName<HTMLArcgisMapElement['arcgisViewKeyDown']>;
    onArcgisViewKeyUp: EventName<HTMLArcgisMapElement['arcgisViewKeyUp']>;
    onArcgisViewLayerviewCreate: EventName<HTMLArcgisMapElement['arcgisViewLayerviewCreate']>;
    onArcgisViewLayerviewCreateError: EventName<
      HTMLArcgisMapElement['arcgisViewLayerviewCreateError']
    >;
    onArcgisViewLayerviewDestroy: EventName<HTMLArcgisMapElement['arcgisViewLayerviewDestroy']>;
    onArcgisViewMouseWheel: EventName<HTMLArcgisMapElement['arcgisViewMouseWheel']>;
    onArcgisViewPointerDown: EventName<HTMLArcgisMapElement['arcgisViewPointerDown']>;
    onArcgisViewPointerEnter: EventName<HTMLArcgisMapElement['arcgisViewPointerEnter']>;
    onArcgisViewPointerLeave: EventName<HTMLArcgisMapElement['arcgisViewPointerLeave']>;
    onArcgisViewPointerMove: EventName<HTMLArcgisMapElement['arcgisViewPointerMove']>;
    onArcgisViewPointerUp: EventName<HTMLArcgisMapElement['arcgisViewPointerUp']>;
    onArcgisViewReadyChange: EventName<HTMLArcgisMapElement['arcgisViewReadyChange']>;
  }
>;
export declare const ArcgisMeasurement: import('@lit/react').ReactWebComponent<
  HTMLArcgisMeasurementElement & {
    class?: string;
  },
  {
    onArcgisPropertyChange: EventName<HTMLArcgisMeasurementElement['arcgisPropertyChange']>;
    onArcgisReady: EventName<HTMLArcgisMeasurementElement['arcgisReady']>;
  }
>;
export declare const ArcgisNavigationToggle: import('@lit/react').ReactWebComponent<
  HTMLArcgisNavigationToggleElement & {
    class?: string;
  },
  {
    onArcgisPropertyChange: EventName<HTMLArcgisNavigationToggleElement['arcgisPropertyChange']>;
    onArcgisReady: EventName<HTMLArcgisNavigationToggleElement['arcgisReady']>;
  }
>;
export declare const ArcgisOrientedImageryViewer: import('@lit/react').ReactWebComponent<
  HTMLArcgisOrientedImageryViewerElement & {
    class?: string;
  },
  {
    onArcgisPropertyChange: EventName<
      HTMLArcgisOrientedImageryViewerElement['arcgisPropertyChange']
    >;
    onArcgisReady: EventName<HTMLArcgisOrientedImageryViewerElement['arcgisReady']>;
  }
>;
export declare const ArcgisPlacement: import('@lit/react').ReactWebComponent<
  HTMLArcgisPlacementElement & {
    class?: string;
  },
  {
    onArcgisReady: EventName<HTMLArcgisPlacementElement['arcgisReady']>;
  }
>;
export declare const ArcgisPrint: import('@lit/react').ReactWebComponent<
  HTMLArcgisPrintElement & {
    class?: string;
  },
  {
    onArcgisComplete: EventName<HTMLArcgisPrintElement['arcgisComplete']>;
    onArcgisPropertyChange: EventName<HTMLArcgisPrintElement['arcgisPropertyChange']>;
    onArcgisReady: EventName<HTMLArcgisPrintElement['arcgisReady']>;
    onArcgisSubmit: EventName<HTMLArcgisPrintElement['arcgisSubmit']>;
  }
>;
export declare const ArcgisScaleBar: import('@lit/react').ReactWebComponent<
  HTMLArcgisScaleBarElement & {
    class?: string;
  },
  {
    onArcgisReady: EventName<HTMLArcgisScaleBarElement['arcgisReady']>;
  }
>;
export declare const ArcgisScaleRangeSlider: import('@lit/react').ReactWebComponent<
  HTMLArcgisScaleRangeSliderElement & {
    class?: string;
  },
  {
    onArcgisPropertyChange: EventName<HTMLArcgisScaleRangeSliderElement['arcgisPropertyChange']>;
    onArcgisReady: EventName<HTMLArcgisScaleRangeSliderElement['arcgisReady']>;
  }
>;
export declare const ArcgisScene: import('@lit/react').ReactWebComponent<
  HTMLArcgisSceneElement & {
    class?: string;
  },
  {
    onArcgisViewChange: EventName<HTMLArcgisSceneElement['arcgisViewChange']>;
    onArcgisViewClick: EventName<HTMLArcgisSceneElement['arcgisViewClick']>;
    onArcgisViewDoubleClick: EventName<HTMLArcgisSceneElement['arcgisViewDoubleClick']>;
    onArcgisViewDrag: EventName<HTMLArcgisSceneElement['arcgisViewDrag']>;
    onArcgisViewHold: EventName<HTMLArcgisSceneElement['arcgisViewHold']>;
    onArcgisViewImmediateClick: EventName<HTMLArcgisSceneElement['arcgisViewImmediateClick']>;
    onArcgisViewImmediateDoubleClick: EventName<
      HTMLArcgisSceneElement['arcgisViewImmediateDoubleClick']
    >;
    onArcgisViewKeyDown: EventName<HTMLArcgisSceneElement['arcgisViewKeyDown']>;
    onArcgisViewKeyUp: EventName<HTMLArcgisSceneElement['arcgisViewKeyUp']>;
    onArcgisViewLayerviewCreate: EventName<HTMLArcgisSceneElement['arcgisViewLayerviewCreate']>;
    onArcgisViewLayerviewCreateError: EventName<
      HTMLArcgisSceneElement['arcgisViewLayerviewCreateError']
    >;
    onArcgisViewLayerviewDestroy: EventName<HTMLArcgisSceneElement['arcgisViewLayerviewDestroy']>;
    onArcgisViewMouseWheel: EventName<HTMLArcgisSceneElement['arcgisViewMouseWheel']>;
    onArcgisViewPointerDown: EventName<HTMLArcgisSceneElement['arcgisViewPointerDown']>;
    onArcgisViewPointerEnter: EventName<HTMLArcgisSceneElement['arcgisViewPointerEnter']>;
    onArcgisViewPointerLeave: EventName<HTMLArcgisSceneElement['arcgisViewPointerLeave']>;
    onArcgisViewPointerMove: EventName<HTMLArcgisSceneElement['arcgisViewPointerMove']>;
    onArcgisViewPointerUp: EventName<HTMLArcgisSceneElement['arcgisViewPointerUp']>;
    onArcgisViewReadyChange: EventName<HTMLArcgisSceneElement['arcgisViewReadyChange']>;
  }
>;
export declare const ArcgisSearch: import('@lit/react').ReactWebComponent<
  HTMLArcgisSearchElement & {
    class?: string;
  },
  {
    onArcgisBlur: EventName<HTMLArcgisSearchElement['arcgisBlur']>;
    onArcgisClear: EventName<HTMLArcgisSearchElement['arcgisClear']>;
    onArcgisComplete: EventName<HTMLArcgisSearchElement['arcgisComplete']>;
    onArcgisFocus: EventName<HTMLArcgisSearchElement['arcgisFocus']>;
    onArcgisPropertyChange: EventName<HTMLArcgisSearchElement['arcgisPropertyChange']>;
    onArcgisReady: EventName<HTMLArcgisSearchElement['arcgisReady']>;
    onArcgisSelectResult: EventName<HTMLArcgisSearchElement['arcgisSelectResult']>;
    onArcgisStart: EventName<HTMLArcgisSearchElement['arcgisStart']>;
    onArcgisSuggestComplete: EventName<HTMLArcgisSearchElement['arcgisSuggestComplete']>;
    onArcgisSuggestStart: EventName<HTMLArcgisSearchElement['arcgisSuggestStart']>;
  }
>;
export declare const ArcgisShadowCast: import('@lit/react').ReactWebComponent<
  HTMLArcgisShadowCastElement & {
    class?: string;
  },
  {
    onArcgisPropertyChange: EventName<HTMLArcgisShadowCastElement['arcgisPropertyChange']>;
    onArcgisReady: EventName<HTMLArcgisShadowCastElement['arcgisReady']>;
  }
>;
export declare const ArcgisSketch: import('@lit/react').ReactWebComponent<
  HTMLArcgisSketchElement & {
    class?: string;
  },
  {
    onArcgisCreate: EventName<HTMLArcgisSketchElement['arcgisCreate']>;
    onArcgisDelete: EventName<HTMLArcgisSketchElement['arcgisDelete']>;
    onArcgisPropertyChange: EventName<HTMLArcgisSketchElement['arcgisPropertyChange']>;
    onArcgisReady: EventName<HTMLArcgisSketchElement['arcgisReady']>;
    onArcgisRedo: EventName<HTMLArcgisSketchElement['arcgisRedo']>;
    onArcgisUndo: EventName<HTMLArcgisSketchElement['arcgisUndo']>;
    onArcgisUpdate: EventName<HTMLArcgisSketchElement['arcgisUpdate']>;
  }
>;
export declare const ArcgisSlice: import('@lit/react').ReactWebComponent<
  HTMLArcgisSliceElement & {
    class?: string;
  },
  {
    onArcgisPropertyChange: EventName<HTMLArcgisSliceElement['arcgisPropertyChange']>;
    onArcgisReady: EventName<HTMLArcgisSliceElement['arcgisReady']>;
  }
>;
export declare const ArcgisSlider: import('@lit/react').ReactWebComponent<
  HTMLArcgisSliderElement & {
    class?: string;
  },
  {
    onArcgisMaxChange: EventName<HTMLArcgisSliderElement['arcgisMaxChange']>;
    onArcgisMaxClick: EventName<HTMLArcgisSliderElement['arcgisMaxClick']>;
    onArcgisMinChange: EventName<HTMLArcgisSliderElement['arcgisMinChange']>;
    onArcgisMinClick: EventName<HTMLArcgisSliderElement['arcgisMinClick']>;
    onArcgisPropertyChange: EventName<HTMLArcgisSliderElement['arcgisPropertyChange']>;
    onArcgisReady: EventName<HTMLArcgisSliderElement['arcgisReady']>;
    onArcgisSegmentClick: EventName<HTMLArcgisSliderElement['arcgisSegmentClick']>;
    onArcgisSegmentDrag: EventName<HTMLArcgisSliderElement['arcgisSegmentDrag']>;
    onArcgisThumbChange: EventName<HTMLArcgisSliderElement['arcgisThumbChange']>;
    onArcgisThumbClick: EventName<HTMLArcgisSliderElement['arcgisThumbClick']>;
    onArcgisThumbDrag: EventName<HTMLArcgisSliderElement['arcgisThumbDrag']>;
    onArcgisTickClick: EventName<HTMLArcgisSliderElement['arcgisTickClick']>;
    onArcgisTrackClick: EventName<HTMLArcgisSliderElement['arcgisTrackClick']>;
  }
>;
export declare const ArcgisSwipe: import('@lit/react').ReactWebComponent<
  HTMLArcgisSwipeElement & {
    class?: string;
  },
  {
    onArcgisPropertyChange: EventName<HTMLArcgisSwipeElement['arcgisPropertyChange']>;
    onArcgisReady: EventName<HTMLArcgisSwipeElement['arcgisReady']>;
  }
>;
export declare const ArcgisTableList: import('@lit/react').ReactWebComponent<
  HTMLArcgisTableListElement & {
    class?: string;
  },
  {
    onArcgisPropertyChange: EventName<HTMLArcgisTableListElement['arcgisPropertyChange']>;
    onArcgisReady: EventName<HTMLArcgisTableListElement['arcgisReady']>;
    onArcgisTriggerAction: EventName<HTMLArcgisTableListElement['arcgisTriggerAction']>;
  }
>;
export declare const ArcgisTimeSlider: import('@lit/react').ReactWebComponent<
  HTMLArcgisTimeSliderElement & {
    class?: string;
  },
  {
    onArcgisPropertyChange: EventName<HTMLArcgisTimeSliderElement['arcgisPropertyChange']>;
    onArcgisReady: EventName<HTMLArcgisTimeSliderElement['arcgisReady']>;
    onArcgisTriggerAction: EventName<HTMLArcgisTimeSliderElement['arcgisTriggerAction']>;
  }
>;
export declare const ArcgisTrack: import('@lit/react').ReactWebComponent<
  HTMLArcgisTrackElement & {
    class?: string;
  },
  {
    onArcgisComplete: EventName<HTMLArcgisTrackElement['arcgisComplete']>;
    onArcgisError: EventName<HTMLArcgisTrackElement['arcgisError']>;
    onArcgisPropertyChange: EventName<HTMLArcgisTrackElement['arcgisPropertyChange']>;
    onArcgisReady: EventName<HTMLArcgisTrackElement['arcgisReady']>;
  }
>;
export declare const ArcgisUtilityNetworkAssociations: import('@lit/react').ReactWebComponent<
  HTMLArcgisUtilityNetworkAssociationsElement & {
    class?: string;
  },
  {
    onArcgisReady: EventName<HTMLArcgisUtilityNetworkAssociationsElement['arcgisReady']>;
  }
>;
export declare const ArcgisUtilityNetworkTrace: import('@lit/react').ReactWebComponent<
  HTMLArcgisUtilityNetworkTraceElement & {
    class?: string;
  },
  {
    onArcgisAddFlag: EventName<HTMLArcgisUtilityNetworkTraceElement['arcgisAddFlag']>;
    onArcgisAddFlagComplete: EventName<
      HTMLArcgisUtilityNetworkTraceElement['arcgisAddFlagComplete']
    >;
    onArcgisAddFlagError: EventName<HTMLArcgisUtilityNetworkTraceElement['arcgisAddFlagError']>;
    onArcgisAddResultArea: EventName<HTMLArcgisUtilityNetworkTraceElement['arcgisAddResultArea']>;
    onArcgisReady: EventName<HTMLArcgisUtilityNetworkTraceElement['arcgisReady']>;
    onArcgisRemoveResultArea: EventName<
      HTMLArcgisUtilityNetworkTraceElement['arcgisRemoveResultArea']
    >;
  }
>;
export declare const ArcgisUtilityNetworkValidateTopology: import('@lit/react').ReactWebComponent<
  HTMLArcgisUtilityNetworkValidateTopologyElement & {
    class?: string;
  },
  {
    onArcgisReady: EventName<HTMLArcgisUtilityNetworkValidateTopologyElement['arcgisReady']>;
  }
>;
export declare const ArcgisValuePicker: import('@lit/react').ReactWebComponent<
  HTMLArcgisValuePickerElement & {
    class?: string;
  },
  {
    onArcgisAnimate: EventName<HTMLArcgisValuePickerElement['arcgisAnimate']>;
    onArcgisNext: EventName<HTMLArcgisValuePickerElement['arcgisNext']>;
    onArcgisPause: EventName<HTMLArcgisValuePickerElement['arcgisPause']>;
    onArcgisPlay: EventName<HTMLArcgisValuePickerElement['arcgisPlay']>;
    onArcgisPrevious: EventName<HTMLArcgisValuePickerElement['arcgisPrevious']>;
    onArcgisPropertyChange: EventName<HTMLArcgisValuePickerElement['arcgisPropertyChange']>;
    onArcgisReady: EventName<HTMLArcgisValuePickerElement['arcgisReady']>;
  }
>;
export declare const ArcgisVersionManagement: import('@lit/react').ReactWebComponent<
  HTMLArcgisVersionManagementElement & {
    class?: string;
  },
  {
    onArcgisReady: EventName<HTMLArcgisVersionManagementElement['arcgisReady']>;
    onArcgisVersioningStateChanged: EventName<
      HTMLArcgisVersionManagementElement['arcgisVersioningStateChanged']
    >;
  }
>;
export declare const ArcgisWeather: import('@lit/react').ReactWebComponent<
  HTMLArcgisWeatherElement & {
    class?: string;
  },
  {
    onArcgisPropertyChange: EventName<HTMLArcgisWeatherElement['arcgisPropertyChange']>;
    onArcgisReady: EventName<HTMLArcgisWeatherElement['arcgisReady']>;
  }
>;
export declare const ArcgisZoom: import('@lit/react').ReactWebComponent<
  HTMLArcgisZoomElement & {
    class?: string;
  },
  {
    onArcgisPropertyChange: EventName<HTMLArcgisZoomElement['arcgisPropertyChange']>;
    onArcgisReady: EventName<HTMLArcgisZoomElement['arcgisReady']>;
  }
>;
