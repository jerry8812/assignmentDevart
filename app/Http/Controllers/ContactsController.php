<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\StoreContactRequest;
use App\Models\Contacts;
class ContactsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Contacts::orderBy('created_at', 'DESC')->get();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreContactRequest $request)
    {
        $newContact = new Contacts;
        $newContact->name = $request["name"];
        $newContact->email = $request["email"];
        $newContact->phoneNumber = $request["phoneNumber"];
        $newContact->physicalAddress = $request["physicalAddress"];
        $newContact->save();
        return $newContact;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $existingContact = Contacts::find( $id );

        if ( $existingContact ) {
            $existingContact->name = $request->contact["name"];
            $existingContact->email = $request->contact["email"];
            $existingContact->phoneNumber = $request->contact["phoneNumber"];
            $existingContact->physicalAddress = $request->contact["physicalAddress"];
            $existingContact->save();
            return $existingContact;
        };
        return "Contact not found";
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $existingContact = Contacts::find( $id );
        if ($existingContact) {
            $existingContact-> delete();
            return "Contact successfully deleted";
        }

        return "Contact not found";
    }
}
