import React from 'react'

export default React.createClass({
  render() {
    return <div> Pets </div>
  }
})

// angular comparison
// export default function( ngModule ) {
// 	ngModule.directive( 'pets', function(){
// 		return {
// 			replace: true,
// 			restrict: 'E',
// 			template: '<div> pets </div> '
// 		};
// 	});
// }