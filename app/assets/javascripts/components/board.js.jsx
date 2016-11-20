var Board = React.createClass({
  propTypes: {
    width: React.PropTypes.node,
    height: React.PropTypes.node
  },

  render: function() {
    var table = {
      "border": "1px solid black",
      "margin": "0 auto",
      "border-collapse": "collapse",
      "height": "400px",
      "width": "400px",
      "background": "black"
    }

    var td = {
      "width": "40px",
      "height": "40px"
    }

    var wSquare = {
      "background": "white"
    }

    return(
      <table style={table}>
        <tr> <td style={td}></td> <td style={td, wSquare}></td> <td style={td}></td> <td style={td, wSquare}></td> <td style={td}></td> <td style={td, wSquare}></td> <td style={td}></td> <td style={td, wSquare}></td> </tr>
        <tr> <td style={td, wSquare}></td> <td style={td}></td> <td style={td, wSquare}></td> <td style={td}></td> <td style={td, wSquare}></td> <td style={td}></td> <td style={td, wSquare}></td><td style={td}></td>  </tr>
        <tr> <td style={td}></td> <td style={td, wSquare}></td> <td style={td}></td> <td style={td, wSquare}></td> <td style={td}></td> <td style={td, wSquare}></td> <td style={td}></td> <td style={td, wSquare}></td> </tr>
        <tr> <td style={td, wSquare}></td> <td style={td}></td> <td style={td, wSquare}></td> <td style={td}></td> <td style={td, wSquare}></td> <td style={td}></td> <td style={td, wSquare}></td><td style={td}></td>  </tr>
        <tr> <td style={td}></td> <td style={td, wSquare}></td> <td style={td}></td> <td style={td, wSquare}></td> <td style={td}></td> <td style={td, wSquare}></td> <td style={td}></td> <td style={td, wSquare}></td> </tr>
        <tr> <td style={td, wSquare}></td> <td style={td}></td> <td style={td, wSquare}></td> <td style={td}></td> <td style={td, wSquare}></td> <td style={td}></td> <td style={td, wSquare}></td><td style={td}></td>  </tr>
        <tr> <td style={td}></td> <td style={td, wSquare}></td> <td style={td}></td> <td style={td, wSquare}></td> <td style={td}></td> <td style={td, wSquare}></td> <td style={td}></td> <td style={td, wSquare}></td> </tr>
        <tr> <td style={td, wSquare}></td> <td style={td}></td> <td style={td, wSquare}></td> <td style={td}></td> <td style={td, wSquare}></td> <td style={td}></td> <td style={td, wSquare}></td><td style={td}></td>  </tr>
       </table>
    );
  }
});
