browser.storage.sync.get( [ 'homer_dashboard_url', 'homer_dashboard_popup_height', 'homer_dashboard_popup_width' ] )
	   .then( ( result ) => {
		   let scale   = 0.75;
		   let width   = result.homer_dashboard_popup_width || 320;
		   let height  = result.homer_dashboard_popup_height || 480;
		   let wrapper = document.getElementById( 'spaceWrap' );
		   let iframe  = document.getElementById( 'homer-dashboard-frame' );

		   if( 1 == scale ) {
			   wrapper.style.setProperty( 'width', width + 'px' );
			   wrapper.style.setProperty( 'height', height + 'px' );
		   } else {
			   wrapper.style.setProperty( 'width', Math.round( ( width * scale ) ) + 'px' );
			   wrapper.style.setProperty( 'height', Math.round( ( height * scale ) ) + 'px' );
		   }

		   iframe.style.setProperty( 'width', width + 'px' );
		   iframe.style.setProperty( 'height', height + 'px' );
		   iframe.style.setProperty( '-webkit-transform', 'scale(' + scale + ')' );
		   iframe.style.setProperty( '-ms-transform', 'scale(' + scale + ')' );
		   iframe.style.setProperty( 'transform', 'scale(' + scale + ')' );

		   setTimeout( function() {
			   document.getElementById( 'homer-dashboard-frame' ).setAttribute( 'src', result.homer_dashboard_url );
		   }, 100 );
	   } );