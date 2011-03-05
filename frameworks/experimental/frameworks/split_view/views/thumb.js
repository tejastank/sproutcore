// ==========================================================================
// Project:   SproutCore - JavaScript Application Framework
// Copyright: ©2006-2010 Sprout Systems, Inc. and contributors.
//            Portions ©2008-2010 Apple Inc. All rights reserved.
// License:   Licensed under MIT license (see license.js)
// ==========================================================================

/**
  @class
  @deprecated
  DEPRECATED. Kept to allow a modicum of backwards-compatibility. Please use 
  a normal view and mix in SC.SplitThumb instead.

  @extends SC.View
  @author Alex Iskander
  @test in split
*/
SC.ThumbView = SC.View.extend(SC.SplitThumb,
/** @scope SC.ThumbView.prototype */ {
  classNames: ['sc-thumb-view'],
  
  init: function() {
    sc_super();
    console.warn("SC.ThumbView is deprecated. Please use a normal view and mix in SC.SplitThumb instead.");
  }
});
