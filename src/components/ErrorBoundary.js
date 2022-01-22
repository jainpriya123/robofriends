import React,{Component} from 'react'

class ErrorBoundary extends Component{
    constructor(props){
        super(props);
        this.state={
            hasError:false
        }
    }
    
    componentDidCatch(error, info){
        TouchList.setState({hasError:true})
    }

    render(){
        if(this.state.hasError){
            return <h1>Ooooops. That is not good</h1>
        }
        return this.props.children
    }
}