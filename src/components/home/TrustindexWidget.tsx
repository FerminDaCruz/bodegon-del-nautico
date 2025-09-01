export default function TrustindexWidget() {
    return (
        <div className="w-full mx-auto">
            <iframe
                src="https://cdn.trustindex.io/amp-widget.html#e9bf221537071062990685f8f29"
                className="w-full h-auto min-h-[300px]"
                sandbox="allow-scripts allow-same-origin"
                scrolling="no"
                title="Trustindex Widget"
            />
        </div>
    );
}
