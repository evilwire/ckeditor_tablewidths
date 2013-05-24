/**
 * Copyright - now till when your guilt has the better of you
 * for blatantly exploiting the labours of others. Remember
 * those who have contributed to your fame and fortune when
 * you buy that yacht.
 *
 * Table Widths - a CKEditor Plugin to set table widths to
 * 500px instead of the default 100%.
 */
(function($)
{
   $(document).ready( function( evt )
   {
      // registers a CKEditor Plugin
      CKEDITOR.plugins.add( 'tablewidths', {
         // setting the path to the icons
         icons : '',

         // defining the init method of the object -
         // this method will be called when CKEditor initialises
         init  : function( editor )
         {
            // ANYTHING IN HERE WILL BE EXECUTED 'onload' 
            CKEDITOR.on( 'dialogDefinition', function( ev )
            {
               // Take the dialog name and its definition from the
               // event data.
               var dialogName = ev.data.name;
               var dialogDefinition = ev.data.definition;

               // Check if the definition is from the dialog
               // we're interested in (the 'Table' dialog)
               if( dialogName == 'table' )
               {
                  // Get a reference to the 'Table Info' tab
                  var infoTab = dialogDefinition.getContents( 'info' );
                  txtWidth = infoTab.get( 'txtWidth' );
                  txtWidth['default'] = 80;
                  cmbWidthType = infoTab.get( 'cmbWidthType' );
                  cmbWidthType['default'] = 'percents';
                  txtCellPad = infoTab.get( 'txtCellPad' );
                  txtCellPad['default'] = 4;
               }
            });
         }
      } );
   });
})(jQuery);
