const DocumentSchema = new mongoose.Schema({

    user: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "User", 
        required: true 
    },

    fileName: { 
        type: String, 
        required: true
    },
    
    fileType: {
        type: String, 
        required: true 
    },          

    fileSize: { 
        type: Number 
    },   
                           
    numChunks: { 
        type: Number 
    },    
                        
    uploadDate: { 
        type: Date, 
        default: Date.now 
    },
    
    // optional: store external service response
    externalId: { 
        type: String 
    },                        // if API returns doc_id
    status: { 
        type: String, 
        default: "ingested" 
    },       // uploaded, ingested, failed
});

module.exports = mongoose.model("Document", DocumentSchema);
