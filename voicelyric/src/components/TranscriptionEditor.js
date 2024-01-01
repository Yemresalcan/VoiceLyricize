import TranscriptionItem from "./TranscriptionItem"

export default function TranscriptionEditor({
    awsTranscriptionItems,setAwsTranscriptionItems}){
    function updateeTranscriptionItem(index,prop,ev){
        const newAwsItems = [...awsTranscriptionItems];
        newAwsItems[index][prop] = ev.target.value;
        setAwsTranscriptionItems(newAwsItems);
    
    }
    
    return(
        <>
        <div className="grid grid-cols-3 sticky top-0 bg-slate-500/50 p-2 
        rounded-md">
                    <div>Başlangıç  </div>
                    <div>Bitiş  </div>
                    <div>İçerik </div>
                </div>
                {awsTranscriptionItems.length > 0 && 
                awsTranscriptionItems.map((item,key) => (
                    <div key={key}>
                        <TranscriptionItem
                            handleStartTimeChange={ev => {updateeTranscriptionItem(key,'start_time',ev)}}
                            handleEndTimeChange={ev => {updateeTranscriptionItem(key,'end_time',ev)}}
                            handleContentChange={ev => {updateeTranscriptionItem(key,'content',ev)}}                     
                            item={item} />
                    </div>
                ))}
         
            </>
            
    )
}