@if ($message = Session::get('success'))
  <div class="alert alert-success alert-dismissable">
    <button type="button" class="close" data-dismiss="alert">&times;</button>
    <p>{{ $message }}</p>
  </div>
@endif

@if ($message = Session::get('info'))
  <div class="alert alert-info alert-dismissable">
    <button type="button" class="close" data-dismiss="alert">&times;</button>
    <p>{{ $message }}</p>
  </div>
@endif

@if ($message = Session::get('error'))
  <div class="alert alert-danger alert-dismissable">
    <button type="button" class="close" data-dismiss="alert">&times;</button>
    <p>{{ $message }}</p>
  </div>
@endif

@if (count($errors->all()) > 0)
  <div class="alert alert-danger alert-dismissable">
    <button type="button" class="close" data-dismiss="alert">&times;</button>
    @foreach ($errors->all() as $message)
      <p>{{ $message }}</p>
    @endforeach
  </div>
@endif