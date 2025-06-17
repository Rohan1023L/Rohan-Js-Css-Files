 document.addEventListener('DOMContentLoaded', function () {
                    const downloadButton = document.getElementById('downloadPdfButton');

                    downloadButton.addEventListener('click', function () {
                        const googleDriveFileId = '1XeQJMldHDZBlDgO4C8183mBlsMToKjZv';
                        const pdfUrl = `https://drive.google.com/uc?export=download&id=${googleDriveFileId}`;

                        try {
                            const link = document.createElement('a');
                            link.href = pdfUrl;
                            link.download = 'Rohan_Ingle_Resume.pdf';
                            document.body.appendChild(link);
                            link.click();
                            document.body.removeChild(link);
                        } catch (error) {
                            console.error('Download error:', error);
                        }
                    });
                });
