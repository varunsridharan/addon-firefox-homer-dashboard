$( document ).ready( () => {
	const formElm = $( 'form' );
	browser.storage.sync.get( [ 'homer_dashboard_url', 'homer_dashboard_popup_height', 'homer_dashboard_popup_width', 'homer_dashboard_popup_scale' ] )
		   .then( ( result ) => {
			   let url = result.homer_dashboard_url;
			   $( 'input#dashboardurl' ).val( url );
			   $( 'input#popup_height' ).val( result.homer_dashboard_popup_height );
			   $( 'input#popup_width' ).val( result.homer_dashboard_popup_width );
			   $( 'input#popup_scale' ).val( result.homer_dashboard_popup_scale );
		   } );
	formElm.on( 'submit', () => {
		browser.storage.sync.set( {
			'homer_dashboard_url': $( 'input#dashboardurl' ).val(),
			'homer_dashboard_popup_height': $( 'input#popup_height' ).val(),
			'homer_dashboard_popup_width': $( 'input#popup_width' ).val(),
			'homer_dashboard_popup_scale': $( 'input#popup_scale' ).val(),
		} );
		return false;
	} );
} );



