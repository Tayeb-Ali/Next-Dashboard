
export default function Footer() {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <footer>
            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-col items-center">
                    <p className="text-center text-gray-500 text-sm">
                        © {year} Streamline. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
