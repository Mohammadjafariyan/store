import { IAbstractCRUDService } from '@/api-clients/abstract/abstract-crud-service';
import { ApiConsts } from '@/api-clients/abstract/api-factory';
import { IModel } from '@/api-clients/models/application-models';
import React, { Component } from 'react'

export default  class AbstractGetList<Tprop,Tstate> extends Component<Tprop,Tstate> {
    listParamName!: string;
    getListService:IAbstractCRUDService;

    constructor(props: any, _listParamName: string , getListService: IAbstractCRUDService) {
        super(props);
        this.listParamName = _listParamName;
        this.getListService=getListService;

        if(!getListService)
        {
            throw new Error("getListService is null ");
            
        }
      if(!_listParamName)
        {
            throw new Error("_listParamName is null ");
            
        }

    }

    getListOnload(){
     this.getListService.getList<IModel>(ApiConsts.MOST_VIEWED).subscribe(models=>{
        let obj:any={};
        
        obj[this.listParamName]=models;
        
        this.setState(obj);
     })   
    }
 

    componentDidMount(): void {

        this.getListOnload();

    }

    render() {
        return (
            <div>AbstractGetList</div>
        )
    }
}
