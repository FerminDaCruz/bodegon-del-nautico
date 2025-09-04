export default function TrustindexWidget() {
    return (
        <div className="w-full mx-auto">
            <iframe
                src="https://cdn.trustindex.io/amp-widget.html#a9930da53c9c4720552696470d2"
                className="w-full h-auto min-h-[300px]"
                sandbox="allow-scripts allow-same-origin"
                scrolling="no"
                title="Trustindex Widget"
            />
        </div>
    );
}
