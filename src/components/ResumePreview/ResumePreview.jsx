import React, { useState } from "react";
import styles from "./ResumePreview.module.css";

function ResumePreview({ resumeLink, onClose }) {
    return (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                <div className={styles.header}>
                    <h3>Resume Preview</h3>
                    <div className={styles.actions}>
                        <a href={resumeLink} download className={styles.downloadBtn}>
                            Download PDF
                        </a>
                        <button className={styles.closeBtn} onClick={onClose}>
                            ✕
                        </button>
                    </div>
                </div>
                <div className={styles.pdfContainer}>
                    <iframe
                        src={`${resumeLink}#view=FitH`}
                        title="Resume Preview"
                        className={styles.pdfFrame}
                    />
                </div>
            </div>
        </div>
    );
}

export default ResumePreview;
