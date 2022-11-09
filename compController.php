<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class compController extends Controller
{
    public function getcompalloc()
    {
        $prod=DB::table('product')->get();
        $mycomp=DB::table('complain')
        ->join('product','complain.prod_id','product.prod_id')
        ->select('complain.*','product.prod_name')
        ->where('comp_status','new')->get();
        $mycompa=DB::table('complain')->where('comp_status','pending')->get();
        return view('./admin/compalloc',compact('mycomp','mycompa'));
    }
    
    
    
    public function alloccomp($id)
    {
        # code...
        // $cname=$req->cname;
        $data=DB::table('complain')->where('comp_id',$id)->get();
        $spx=DB::table('s_reg')->get();
        return view('./admin/allocate',compact('spx','data'));
        // return back()->with('allocated','Compain has been allocated...😍');
        }
        
        public function getallocfinal(Request $req)
    {
        # code...
        DB::table('compalloc')->insert([
            'cname'=>$req->cname,
            'comp_id'=>$req->comp_id,
            'name'=>$req->spname
        ]);
        
        DB::table('complain')->where('comp_id',$req->comp_id)->update([
            'comp_status'=>'pending'
        ]);
        return redirect('compalloc');
        // echo "allocated";
    }
    public function spcompview()
    {
        # code...
        $name=session('name');
        $abc=DB::table('product')->get();
        $al= DB::table('compalloc')->where('name',$name)->get();
        echo $comp_id=$al[0]->comp_id;
        $mycomp=DB::table('complain')
        ->where('comp_status','pending')
        ->where('comp_id',$comp_id)
        ->join('product','complain.prod_id','product.prod_id')
        // ->join('compalloc','complain.cname','=','compalloc.cname')
        // ->select('complain.*','compalloc.cname','product.prod_name')
        ->get();
        $mycompa=DB::table('complain')
        ->where('comp_id',$comp_id)
        ->where('comp_status','completed')
        ->join('product','complain.prod_id','product.prod_id')
        // ->join('compalloc','complain.cname','=','compalloc.cname')
        // ->select('complain.*','compalloc.cname','product.prod_name')
        ->get();
       return view('./serviceprovider/spcomp',compact('al','mycomp','mycompa'));
    }
    
    public function spcomp($comp_id)
    {
            
        # code...
        DB::table('complain')->where('comp_id',$comp_id)->update([
            'comp_status'=>'completed'
        ]);
        DB::table('compalloc')->where('caid',$comp_id)->delete();
        return redirect('/spcomp');
    }


//customer add compains
    public function addComp()
    {
        # code...
        // $c= DB::table('cust_reg')->where('cid',$cid)->get();
        $ser= DB::table('s_reg')->get();
        // $comp= DB::table('complain')->where('cid',$cid)->get();
        $prod= DB::table('product')->get();
        return view('./customer/getcomp',compact('prod','ser')); 
        // return view('./customer/getcomp');
    }

    public function addCompSubmit(Request $req)
    {
        # code...
        DB::table('complain')->insert([
            'comp_id'=>$req->comp_id,
            'cname'=>$req->cname,
            'prod_id'=>$req->prod_id,
            'comp_desc'=>$req->comp_desc,
            'comp_status'=>$req->comp_status
        ]);
        return Back()->with('comp_added_success','Complain has been Registered');
    }

    public function mycomp()
    {
        # code...
        $mycomp=DB::table('complain')->where('cname',session('name'))->get();
        return view('./customer/dashboard',compact('mycomp'));
    }

}
