import { AudioPlayer } from '../components/AudioPlayer';
import { DocumentViewer } from '../components/DocumentViewer';
import { VideoPlayer } from '../components/VideoPlayer';
import { ImageViewer } from '../components/ImageViewer';

const Modal = ({ data, content, setSelectedContent, setShowMediaModal }) => {
    const { name, path, type } = content;
    return (
        <div style={styles.modal}>
            <div style={styles.modalContent}>
                <div style={styles.modalHeader}>
                    <h1 style={styles.modalTitle}>{name}</h1>
                    <button style={styles.modalCloseButton} onClick={() => setShowMediaModal(false)}>close</button>
                </div>
                <div style={styles.splitContainer}>
                    <div style={styles.modalImageContainer}>
                        <div style={styles.fileViewer}>
                            {type === 'video' && (
                                <VideoPlayer path={path} />
                            )}
                            {type === 'audio' && (
                                <AudioPlayer path={path} />
                            )}
                            {type === 'document' && (
                                <DocumentViewer path={path} />
                            )}
                            {type === 'image' && (
                                <ImageViewer path={path} />
                            )}
                        </div>
                    </div>
                    <div style={styles.modalDescription}>
                        <div style={styles.modalRowData}>
                            <p style={styles.modalDescriptionText}>Type</p>
                            <p style={styles.modalDescriptionText}>{type}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const styles = {
    modal: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,0.5)',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 1
    },
    fileViewer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '10px',
        margin: '10px',
        width: '30vw',
        height: '100%',
        cursor: 'pointer',
        objectFit: 'cover',
        position: 'relative'
    },
    modalContent: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        width: '50%',
        backgroundColor: '#ffffff',
        borderRadius: '10px',
        padding: '20px'
    },
    splitContainer: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        gap: "16px",
    },
    modalHeader: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignContent: 'center',
        width: '100%',
        marginBottom: '20px'
    },
    modalTitle: {
        fontSize: '2rem',
        fontWeight: 'bold',
        color: '#000000',
        textShadow: '2px 2px 2px #ffffff',
        textAlign: 'left'
    },
    modalCloseButton: {
        fontSize: '1.5rem',
        fontWeight: 'bold',
        color: '#000000',
        textShadow: '2px 2px 2px #ffffff',
        textAlign: 'left',
        cursor: 'pointer',
        border: 'none',
        backgroundColor: 'transparent'
    },
    modalImageContainer: {
        width: '100%',
        height: '50%',
        marginBottom: '20px'
    },
    modalImage: {
        width: '100%',
        height: '100%',
        objectFit: 'contain',
    },
    modalDescription: {
        display: 'flex',
        flexDirection: "column",
        width: '100%',
    },
    modalRowData: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        width: "100%"
    },
    modalDescriptionText: {
        fontSize: '1rem',
        fontWeight: 'bold',
        color: 'gray',
        fontStyle: "italic",
        textShadow: '2px 2px 2px #ffffff',
        textAlign: 'left'
    },
    modalImagePicker: {
        display: "flex",
        flexDirection: "row",
        maxWidth: "100%",
        overflowX: "scroll",
        gap: "10px",
    },
    image: {
        width: '200px',
        height: '200px',
        objectFit: 'cover',
    },
    imageContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        cursor: 'pointer',
    },

}

export default Modal;