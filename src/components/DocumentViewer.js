export const DocumentViewer = ({ path }) => {
    return (
        <div style={{ width: "100%" }}>
            <iframe style={{ width: "100%" }} src={path}></iframe>
        </div>
    )
}