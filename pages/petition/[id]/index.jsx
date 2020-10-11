import 'react';

export default class PetitionView extends React.Component {
	render() {
		return (
			<div>
				<h1>{this.props.name}</h1>
			</div>
		);
	}
}

export async function getServerSideProps(context) {
	return handleError(404, "Petition not found", context.res)
    const petitionID = context.params.id
	return {
		props: {
			name: 'test petition'
		} // will be passed to the page component as props
	};
}

function handleError(code, message, res) {
    res.statusCode = code
    return { props: {error: {code, message}} }
}