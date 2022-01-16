browser.storage.sync.get( [ 'homer_dashboard_url', 'homer_dashboard_popup_height', 'homer_dashboard_popup_width','homer_dashboard_popup_scale' ] )
	   .then( ( result ) => {
		   let scale   = parseFloat(result.homer_dashboard_popup_scale) || 0.80;
		   let width   = parseInt(result.homer_dashboard_popup_width) || 420;
		   let height  = parseInt(result.homer_dashboard_popup_height) || 900;
		   let wrapper = document.getElementById( 'spaceWrap' );
		   let iframe  = document.getElementById( 'homer-dashboard-frame' );

		   if( 1 == scale ) {
			   wrapper.style.setProperty( 'width', width + 'px' );
			   wrapper.style.setProperty( 'height', height + 'px' );
		   } else {
			   wrapper.style.setProperty( 'width', ( width * scale ) + 'px' );
			   wrapper.style.setProperty( 'height', ( height * scale ) + 'px' );
		   }

		   iframe.style.setProperty( 'width', width + 'px' );
		   iframe.style.setProperty( 'height', height + 'px' );
		   iframe.style.setProperty( '-webkit-transform', 'scale(' + scale + ')' );
		   iframe.style.setProperty( '-ms-transform', 'scale(' + scale + ')' );
		   iframe.style.setProperty( 'transform', 'scale(' + scale + ')' );

		   document.getElementById( 'homer-dashboard-frame' ).setAttribute( 'src', result.homer_dashboard_url );
	   } );