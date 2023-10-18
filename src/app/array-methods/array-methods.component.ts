import { Component,OnInit } from '@angular/core';
import { dataFilter,concatData,copyWithinData,flatData,flatMapData,arrayData,arrayNum,reverseData,sortData,spliceData,fillData } from './data'

@Component({
  selector: 'app-array-methods',
  templateUrl: './array-methods.component.html',
  styleUrls: ['./array-methods.component.scss']
})
export class ArrayMethodsComponent implements OnInit{

    public filterData:any[] = dataFilter;
    public filterResult:any[] = [];
    public concatData:any[] = concatData;
    public concatResult:any[] = [];
    public copyWithinData:any[] = copyWithinData;
    public copyWithinResult:any[] = [];
    public everyData:any[] = dataFilter;
    public everyResult:any;
    public findData:any[] = dataFilter;
    public findResult:any[] = [];
    public findIndexData:any[] = dataFilter;
    public findIndexResult:number = 0;
    public flatData:any[] = flatData;
    public flatResult:any[] = [];
    public flatMapData:any[] = flatMapData;
    public flatMapResult:any[] = [];
    public forEchData:any[] = dataFilter;
    public forEchResult:any[] = [];
    public IncludeData:any[] = dataFilter;
    public IncludeResult:any;
    public indexOfData:any[] = dataFilter;
    public indexOfResult:any;
    public joinData:any[] = arrayData;
    public joinResult!:any[];
    public keyData:any[] = flatData;
    public keyResult:any;
    public lastIndexOfData:any[] = arrayData;
    public lastIndexOfResult:any;
    public MapData:any[] = dataFilter;
    public MapResult:any[] = [];
    public popData:any[] = dataFilter;
    public popResult:any[] = []
    public pushData:any[] = dataFilter;
    public pushResult!:any[];
    public reduceData:any[] = arrayNum;
    public reduceResult:any;
    public reduceRightData:any[] = arrayNum;
    public reduceRightResult:any;
    public reverseData:any[] = reverseData;
    public reverseResult:any[] = [];
    public shiftData:any[] = dataFilter;
    public shiftResult:any[] = [];
    public sliceData:any[] = dataFilter;
    public sliceResult:any[] = [];
    public someData:any[] = dataFilter;
    public someResult:any;
    public sortData:any[] = sortData;
    public sortResult:any[]=[];
    public spliceData:any[] = spliceData;
    public spliceResult:any[]=[];
    public toStringData:any[] = arrayNum;
    public toStringResult:any[]=[];
    public unshiftData:any[] = dataFilter;
    public unshiftResult:any[]=[];
    public FillData:any[] = fillData;
    public FillResult:any[]=[];


    ngOnInit(): void {
      this.onFilte()
      this.onConcat()
      this.oncopyWithin()
      this.onEvery()
      this.onFind();
      this.onFindIndex();
      this.onFlat();
      this.onflatMap();
      this.onforEch();
      this.onInclude();
      this.onFindIndex();
      this.onIndexOf();
      this.onjoin();
      this.onKey();
      this.onMap();
      this.onPop();
      this.onPush();
      this.onreduce();
      this.onreduceRight();
      this.onreverse();
      this.onshift();
      this.onslice();
      this.onSome();
      this.onSort();
      this.onsplice();
      this.ontoString();
      this.onUnshift();
      this.onFill();
    }

    onFilte():void{
      this.filterResult = this.filterData.filter((e:any)=>e.age > 18);
    }
    onConcat():void{
      this.concatResult = this.concatData.concat(this.filterData);
    }
    oncopyWithin():void{
      this.copyWithinResult = this.copyWithinData.copyWithin(2 ,1);
    }
    onEvery():void {
      this.everyResult = this.everyData.every((e:any)=>e.age > 18);
      // this.everyResult = this.everyData.every((e:any)=>e.age < 35); //true
    }
    onFind():void{
      this.findResult = this.findData.find((e:any)=>e.name == 'abc2');
    }
    onFindIndex():void{
      this.findIndexResult = this.findIndexData.findIndex((e:any)=>e.name == 'abc2');
    }
    onFlat():void{
      this.flatResult = this.flatData.flat();
    }
    onflatMap():void{
      this.flatMapResult = this.flatMapData.flatMap(e => e);
    }
    mult:any
    onforEch():void{
      this.forEchData.forEach(e => this.mult= e.age * 10)
      this.forEchData = this.forEchData
      this.forEchResult = this.mult
    }
    onInclude():void{
      this.IncludeResult = this.IncludeData.includes({id:1,name:'abc1',age:12});  
    }
    onIndexOf():void{
      this.indexOfResult = this.indexOfData.indexOf({id:1,name:'abc1',age:12});
    }
    onjoin():void{
      this.joinData.join('+');
      this.joinResult = this.joinData
    }
    onKey():void{
      let ite = this.keyData.keys()
      for(let key of ite){
        this.keyResult = key
      }
    }
    onlastIndexOf():void{
      this.lastIndexOfResult = this.lastIndexOfData.lastIndexOf(1)
    }
    onMap():void{
      this.MapResult = this.MapData.map((e:any)=>e.age > 20 );
    } 
    onPop():void{
      this.popResult = this.popData.pop();
    }
    onPush():void{
      this.pushData.push({id:8,name:'pushedData',age:42})
      this.pushResult = this.pushData;
    } 
    onreduce():void{
      this.reduceResult = this.reduceData.reduce((e,t)=>{
        return e+t
      });
    } 
    onreduceRight():void{
      this.reduceRightResult = this.reduceRightData.reduce((e,t)=>{
        return e-t
      });
    } 
    onreverse():void{
      this.reverseResult = this.reverseData.reverse();
    } 
    onshift():void{
      this.shiftResult = this.shiftData.shift();
    } 
    onslice():void{
      this.sliceResult = this.sliceData.slice(1,3);
    }
    onSome():void{
      this.someResult = this.someData.some((e:any)=>e.age<19);
    }
    onSort():void{
      this.sortResult = this.sortData.sort();
    }
    onsplice():void{
      this.spliceResult = this.spliceData.splice(1,2,{id:8,name:'Splice'});
    }
    ontoString():void{
      this.toStringData.toString();
      this.toStringResult = this.toStringData
    }
    onUnshift():void{ 
      this.unshiftData.unshift({id:0,name:'Unshift'},{id:10,name:'Unshift-02'});
      this.unshiftResult = this.unshiftData
    }
    onFill():void{ 
      this.FillData.fill('fill',2,4);
      this.FillResult = this.FillData
    }

}
