import React from 'react'

export default React.createClass({
  render() {
    return <div> Stores </div>
  }
})

// angular comparison
// export default function( ngModule ) {
// 	ngModule.directive( 'stores', function(){
// 		return {
// 			replace: true,
// 			restrict: 'E',
// 			template: '<div> store </div> '
// 		};
// 	});
// }