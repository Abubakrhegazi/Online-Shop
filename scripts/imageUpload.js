function imageupload(){

    function converttobase64(e){
        var reader=new FileReader();
        reader.readAsDataURL(e.target.files[0])
reader.onload=()=>{
    console.log(reader.result); //bas64 to string

};
}
return
    (
    <div classname="auth-wrappe">
        <div classname="auth-inner" style={{width:"auto"}}>
           < input accept="image/*" type="file" >
           
           </input>
    </div>

    </div>
    )
}
