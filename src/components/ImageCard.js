import React from 'react';

class ImageCard extends React.Component{
	constructor(props) {
		super(props);
		
		this.state = { spans: 0 } ;
		
		this.imageRef = React.createRef();
	}
	
	componentDidMount() {
		this.imageRef.current.addEventListener('load', this.setSpans);
		// what we are doing here: we are adding event listener for 'load' event, 
		// i.e anytime the <img> calls the event load(when img is successfully downloaded), 
		// we will trigger a callback method named as 'setSpans'
	}
	
	setSpans = () => {
		const height = this.imageRef.current.clientHeight;
		
		const spans = Math.ceil(height / 10);
		// 10 is coming from 'grid-auto-rows' in ImageList.css
		
		this.setState({ spans });
		// the above line is similar to this.setState({spans:spans})
	};
	
    render() {
		const { description, urls } = this.props.image;
		
        return (
            <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
				<img ref={this.imageRef} alt={description} src={urls.regular} />
			</div>
        );
    }
}
export default ImageCard;