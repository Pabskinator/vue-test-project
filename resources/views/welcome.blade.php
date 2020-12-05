@extends('layouts.app')
@section('content')
    @include('layouts.nav')

    <div class="container">
        <router-view></router-view>
    </div>
@endsection
