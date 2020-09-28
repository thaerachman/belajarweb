import React, {Component} from 'react';

class Registrasi extends Component {
  constructor(props){
    super (props)
    this.state={
      judul: 'Contoh Judul',
      contohPerubahan:'Judul yang akan diubah',
      namaDepan:'',
      namaBelakang:'',
      alamat:'',
      kodePos:'',
    }
    this.ubahState = this.ubahState.bind(this)
  }

  ubahState(namaValue, e){
    e.preventDefault()

    var tampungData = e.target.value
    this.setState(function(state, props){
      return {
        [namaValue]: tampungData
      }
    });
    }
    // console.log(e.target.value)

  render(){
    return (
      <div>
      <h5> Nama Depan </h5>
      <p> {this.state.namaDepan} </p>
      <input value={this.state.namaDepan} onChange={(e)=>this.ubahState("namaDepan", e)} />
      <h5> ================= </h5>

      <h5> Nama Belakang </h5>
      <p> {this.state.namaBelakang} </p>
      <input value={this.state.namaBelakang} onChange={(e)=>this.ubahState("namaBelakang", e)} />
      <h5> ================= </h5>

      <h5> Alamat </h5>
      <p> {this.state.alamat} </p>
      <input value={this.state.alamat} onChange={(e)=>this.ubahState("alamat", e)} />
      <h5> ================= </h5>

      <h5> Kode Pos </h5>
      <p> {this.state.kodePos} </p>
      <input value={this.state.kodePos} onChange={(e)=>this.ubahState("kodePos", e)} />
      <h5> ================= </h5>
      {
      // <button href="/" onClick={()=>this.ubahState()}> Klik Rubah </button>
      // <input onChange={(e)this.ubahState(e)} />
    }

      </div>
    )
  }
}

export default Registrasi;
